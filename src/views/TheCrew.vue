<script setup>
    import OneCrew from '../components/OneCrew.vue'
    import SectionTitle from '../components/SectionTitle.vue'
    import { data } from '../data.js';
    import { ref, reactive, computed } from 'vue'

    const crew = reactive(data.crew);
  console.log(crew)
    const currentTab = ref(0);

    const currentCrew = computed(() => {
      return crew[currentTab.value];
    });
</script>

<template>
  <main>
    <OneCrew />

    <SectionTitle 
        :section="{ 
          number: '02', 
          description: 'MEET YOUR CREW'}" 
      />
         <div class="tabs">
          <button 
            v-for="(destination, index) in crew" 
            :key="index"
            @click="currentTab = index"
            :class="{ active: currentTab === index }"
          >
            {{ destination.name }}
          </button>
        </div>
      <OneCrew v-if="currentCrew" 
          :crew="currentCrew"
        />

    <div class="background"></div>
  </main>

</template>




<style scoped>
  .background {
    background-image:url('../assets/crew/background-crew-desktop.jpg') !important;
  }

  .tabs {
    z-index: 2 !important;
  }
</style>