<template>
  <main>
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
<div class="background"></div>
</template>

<script setup lang="ts">
  import { Technology } from '../types'
  import OneTechnology from '../components/OneTechnology.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import { data } from '../data.ts'
  import { ref, reactive, computed } from 'vue'

  const technologies: Technology[] = reactive(data.technologies);
  const currentTab = ref(0)

  const currentTechnology = computed<Technology>(() => {
    return technologies[currentTab.value]
  })
</script>

<style scoped lang="scss">
  @import url('@/assets/main.css');

  .background {
    background-image:url('@/assets/technology/background-technology-desktop.jpg');
    @media (max-width: 1150px) {
      background-image:url('@/assets/technology/background-technology-tablet.jpg');
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/technology/background-technology-mobile.jpg');
    }
  }
main {
  .technologies-container {
    width: 100vw;
    height: 100vh;
    padding-top: 10rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    @media (max-width: 1150px) {
      flex-direction: column;
      justify-items: center;
    }
    .tabs {
      display: flex;
      flex-direction: column;
      z-index: 2;
      left: 20rem;
      position: relative;
      @media (max-width: 1450px) {
        left: 1rem;
      }
      @media (max-width: 1150px) {
        flex-direction: row;
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
          position: relative;
          bottom: 28rem;
        }
        @media (max-width: 550px) {
          bottom: 32rem;
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

