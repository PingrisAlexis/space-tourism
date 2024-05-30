<template>
  <main >
    <ScreenSlider 
      :currentTab="currentTab" 
      :collection="technologies" 
      @update-tab="updateTab"
      />
    <SectionTitle 
      :section="{ 
        number: '03', 
        description: 'SPACE LAUNCH 101'}"
    />
    <div class="technologies-container">
      <OneTechnology
        v-if="currentTechnology"
        :technology="currentTechnology"
      />
      <div class="tabs">
        <div class="button"
          v-for="(technology, index) in technologies"
          :key="index"
          @click="currentTab = index"
          :class="{ active: currentTab === index }"
          >
          {{ index +1 }}
        </div>
      </div>
    </div>
</main>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import { data } from '../data.ts'
  import { Technology } from '../types'
  import OneTechnology from '../components/OneTechnology.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import ScreenSlider from '../components/ScreenSlider.vue'

  const technologies = reactive<Technology[]>(data.technologies);
  const currentTab = ref<number>(0)

  const currentTechnology = computed<Technology>(() => {
    return technologies[currentTab.value]
  })
  const updateTab = (newTab: number) => {
    currentTab.value = newTab
  }
</script>

<style scoped lang="scss">
  @import url('@/assets/main.scss');

main {
  .technologies-container {
    padding-top: 10rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    @media (max-width: 1150px) {
      flex-direction: column;
      justify-items: center;
      align-items: space-around;
    }
    .tabs {
      display: flex;
      flex-direction: column;
      z-index: 2;
      left: 20rem;
      position: relative;
      top: 13rem;
      @media (max-width: 1450px) {
        left: 0;
      }
      @media (max-width: 1150px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        top: -30rem;
        }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        margin: 1rem;
        height: 8rem;
        width: 8rem;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid #464850;
        transition: border .8s ease, background-color .8s ease, color .8s ease;
        color: white;
        cursor: pointer;
        @media (max-width: 1150px) {
          height: 5rem;
          width: 5rem;
          font-size: 2rem;
        }
        &.active {
          background-color: var(--color-first);
          color: black !important;
        }
        &:hover {
          border: 1px solid var(--color-dot-hover);
        }
      }
    }
  }
}
</style>

