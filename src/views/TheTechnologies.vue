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
      <Tabs 
        :currentTab="currentTab" 
        :collection="technologies"
        :collectionName="collectionName" 
        :customClassTabs="ClassTabs"
        :customClassBtns= "ClassBtns"
        @update-tab="updateTab"
      />
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
  import Tabs from '../components/Tabs.vue'

  const ClassTabs: string = "technologies-tabs"
  const ClassBtns: string = "technologies-btns"
  const collectionName: string = "technologies"

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
  }
}
</style>

