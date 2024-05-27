<template>
  <main>
    <SectionTitle 
      :section="{ 
        number: '01', 
        description: 'PICK YOUR DESTINATION'}"
    />
    <div class="planets">
      <div class="tabs">
        <button 
          v-for="(destination, index) in destinations" 
          :key="index"
          @click="currentTab = index"
          :class="{ 'hover-border': true, 'active': currentTab === index }"
        >
          {{ destination.name }}
        </button>
      </div>
    </div>
    <OneDestination v-if="currentDestination" 
      :destination="currentDestination"
    />
  </main>
</template>

<script setup lang="ts">
  import { Destination } from '../types'
  import OneDestination from '../components/OneDestination.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import { data } from '../data.js';
  import { ref, reactive, computed } from 'vue'

  const destinations: Destination[] = reactive(data.destinations);

  const currentTab: number = ref(0)

  const currentDestination: Destination = computed<Destination>(() => {
    return destinations[currentTab.value]
  })
</script>

<style scoped  lang="scss">
  @import url('@/assets/main.css');

  main {
    .planets {
      margin-top: 15rem;
      width: 100vw;
      display: flex;
      justify-content: center;
      .tabs {
        position: relative;
        top: 14rem;
        left: 28.5rem;
        z-index: 2 !important;
        color: var(--color-sec);
        @media (max-width: 1150px) {
          top: 32.5rem;
          left: 0rem;
          align-self: center;
          z-index: 1;
          margin: auto !important;
        }
        @media (max-width: 800px) {
          top: 30rem;
        }
        button {
          background: transparent;
          margin: 0 1rem;
          cursor: pointer;
          font-size: 2.5rem;
          color: var(--color-hover);
          text-transform: uppercase;
          border: none;
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
          &.hover-border {
            padding-bottom: 1.1rem !important;
          }
          &.active {
            color: var(--color-first);
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
</style>