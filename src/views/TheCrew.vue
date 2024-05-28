<template>
  <main v-touch:swipe.left="nextTab" v-touch:swipe.right="prevTab">
    <SectionTitle 
      :section="{ 
      number: '02', 
      description: 'MEET YOUR CREW'}" 
    />  
    <OneMember v-if="currentMember" class="member"
      :member="currentMember"
    />
    <div class="tabs">
      <div class="button"
        v-for="(member, index) in crew" 
        :key="index"
        @click="currentTab = index"
        :class="{ active: currentTab === index }"
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'

  import { Member } from '../types'
  import OneMember from '../components/OneMember.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import { data } from '../data.js';

  const crew = reactive<Member[]>(data.crew);
  const currentTab = ref<number>(0);

  const currentMember = computed<Member>(() => {
    return crew[currentTab.value]
  })

  const nextTab = ():void => {
    if (currentTab.value < crew.length - 1) {
      currentTab.value++
    } else {
      currentTab.value = 0
    }
  }

  const prevTab = ():void => {
    if (currentTab.value > 0) {
      currentTab.value--
    } else {
      currentTab.value = crew.length - 1
    }
  }
</script>

<style scoped lang="scss">
@import url('@/assets/main.css');

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    @media (max-width: 1150px) {
      flex-direction: column-reverse;
    }
  }
  .tabs {
    position: absolute;
    bottom: 8rem;
    left: 20rem;
    z-index: 2;
    @media (max-width: 1150px) {
      top: 38rem;
      left: 0rem;
      width: 100vw;
      text-align: center;
    }
    @media (max-width: 800px) {
      bottom: 0;
      top: 52rem;
      position: absolute;
    }
    .button {
      margin: 0.8rem;
      height: 13px;
      width: 13px;
      background-color: #464850;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
      transition: background-color .8s ease;
      @media (max-width: 800px) {
        height: 18px;
        width: 18px;
      }
      &.active {
        background-color: var(--color-first);
      }
      &:hover {
        background-color: #85868b;
      }
    }
  }
</style>