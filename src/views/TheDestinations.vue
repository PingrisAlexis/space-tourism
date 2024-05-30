<template>
    <main>
      <ScreenSlider 
      :currentTab="currentTab" 
      :collection="destinations" 
      @update-tab="updateTab"
      />
      <SectionTitle 
        :section="{ 
          number: '01', 
          description: 'PICK YOUR DESTINATION'}"
      />
      <Tabs 
        :currentTab="currentTab" 
        :collection="destinations"
        :collectionName="collectionName" 
        :customClassTabs="ClassTabs"
        :customClassBtns= "ClassBtns"
        @update-tab="updateTab"
      />
      <OneDestination v-if="currentDestination" 
        :destination="currentDestination"
      />
  </main>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import { data } from '../data.js'
  import { Destination } from '../types'
  import OneDestination from '../components/OneDestination.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import ScreenSlider from '../components/ScreenSlider.vue'
  import Tabs from '../components/Tabs.vue'

  const ClassTabs: string = "destinations-tabs"
  const ClassBtns: string = "destinations-btns"
  const collectionName: string = "destinations"

  const destinations = reactive<Destination[]>(data.destinations)
  const currentTab = ref<number>(0)

  const currentDestination = computed<Destination>(() => {
    return destinations[currentTab.value]
  })
  const updateTab = (newTab: number) => {
    currentTab.value = newTab
  }
</script>