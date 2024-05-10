<script setup>
    import OneDestination from '../components/OneDestination.vue'
    import SectionTitle from '../components/SectionTitle.vue'
    import { data } from '../data.js';
    import { ref, reactive, computed } from 'vue'

    const destinations = reactive(data.destinations);

    const currentTab = ref(0);

    const currentDestination = computed(() => {
      return destinations[currentTab.value];
    });

</script>

<template>
  <main class="destinations-container">
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
            :class="{ active: currentTab === index }"
          >
            {{ destination.name }}
          </button>
        </div>
      </div>
        <OneDestination v-if="currentDestination" 
          :destination="currentDestination" 
          :name="currentDestination.name"  
          :description="currentDestination.description" 
          :image="currentDestination.images" 
          :distance="currentDestination.distance" 
          :travel="currentDestination.travel"
        />
     
    
    <div class="background"></div>
  </main>
</template>

<style scoped  lang="scss">
@import url('@/assets/main.css');
  .background {
    background-image:url('../assets/destination/background-destination-desktop.jpg') !important;
  }
  .destinations-container {
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
          @media (max-width: 1150px) {
            top: 34rem;
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
            &.active {
              color: white;
              border-bottom: 0.3rem solid white;
              padding-bottom: 1.1rem;
            }
            &:hover {
              border-bottom: 0.3rem solid #383B4B;
              padding-bottom: 1.1rem;
            }
          }
        }
      }
  }
</style>