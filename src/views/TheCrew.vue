<template>
  <main >
    <ScreenSlider 
      :currentTab="currentTab" 
      :collection="crew" 
      @update-tab="updateTab"
      />
    <SectionTitle 
      :section="{ 
      number: '02', 
      description: 'MEET YOUR CREW'}" 
    />  
    <OneMember v-if="currentMember" 
      class="member"
      :member="currentMember"
    />
    <Tabs 
        :currentTab="currentTab" 
        :collection="crew"
        :collectionName="collectionName" 
        :customClassTabs="ClassTabs"
        :customClassBtns= "ClassBtns"
        @update-tab="updateTab"
      />
  </main>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import { data } from '../data.js'
  import { Member } from '../types'
  import OneMember from '../components/OneMember.vue'
  import SectionTitle from '../components/SectionTitle.vue'
  import ScreenSlider from '../components/ScreenSlider.vue'
  import Tabs from '../components/Tabs.vue'

  const ClassTabs: string = "crew-tabs"
  const ClassBtns: string = "crew-btns"
  const collectionName: string = "crew"

  const crew = reactive<Member[]>(data.crew)
  const currentTab = ref<number>(0);

  const currentMember = computed<Member>(() => {
    return crew[currentTab.value]
  })
  const updateTab = (newTab: number) => {
    currentTab.value = newTab
  }
</script>

<style scoped lang="scss">
@import url('@/assets/main.scss');

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
</style>