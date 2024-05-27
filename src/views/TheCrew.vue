<template>
  <main>
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

  const crew: Member[] = reactive(data.crew);
  const currentTab = ref<number>(0);

  const currentMember: Member = computed<Member>(() => {
    return crew[currentTab.value]
  })
</script>

<style scoped lang="scss">
@import url('@/assets/main.css');

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow:hidden;
  }
  .tabs {
    position: relative;
    bottom: 8rem;
    left: 20rem;
    z-index: 2;
    @media (max-width: 1150px) {
      bottom: 45rem;
      left: 0rem;
      align-self: center;
    }
    @media (max-width: 800px) {
      bottom: 33rem;
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
      &.active {
        background-color: var(--color-first);
      }
      &:hover {
        background-color: #85868b;
      }
    }
  }
</style>