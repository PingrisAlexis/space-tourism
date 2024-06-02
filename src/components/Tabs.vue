<template>
  <div :class="customClassTabs">
    <div
      v-for="(item, index) in collection"
      :key="index"
      @click="selectTab(index)"
      :class="{  'active': currentTab === index, [customClassBtns]: true,  'hover-border': collectionName === 'destinations' }"
    >
    <span v-if="collectionName === 'destinations'"> {{ item.name }}</span>
    <span v-if="collectionName === 'technologies'"> {{ index +1 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Destination, Technology, Member } from '@/types';
import { defineEmits, ref, watch } from 'vue';

const props = defineProps<{
  customClassTabs: string,
  customClassBtns: string,
  collection: Destination[] | Member[] | Technology[]
  collectionName: string
  currentTab: number
}>()
 
const emit = defineEmits(['update-tab'])
const currentTab = ref<number>(props.currentTab);
const selectTab = (index: number) => {
  currentTab.value = index;
    emit('update-tab', currentTab.value)
}

watch(() => props.currentTab, (newTab) => {
  currentTab.value = newTab;
});
</script>

<style scoped  lang="scss">
  @import url('@/assets/main.scss');

  .destinations-tabs {
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2 !important;
    .destinations-btns  {
      z-index: 10 !important;
      position: relative;
      top: 14rem;
      left: 28.5rem;
      color: var(--color-sec);
      background: transparent;
      margin: 0 1rem;
      cursor: pointer;
      font-size: 2rem;
      text-transform: uppercase;
      @media (max-width: 1150px) {
        top: 36rem;
        left: 0rem;
        align-self: center;
        z-index: 1;
      }
      @media (max-width: 800px) {
        top: 31rem;
        font-size: 1.7rem;
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
  .technologies-tabs {
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
    .technologies-btns {
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
      transition: border 1s ease, background-color 1s ease, color 1s ease;
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
  .crew-tabs {
    position: absolute;
    bottom: 8rem;
    left: 20rem;
    z-index: 2 !important;
    height: 0rem;
    background-color: red;
    @media (max-width: 1150px) {
      top: 38rem;
      left: 0rem;
      width: 100%;
      text-align: center;
    }
    @media (max-width: 800px) {
      bottom: 0;
      top: 52rem;
      position: absolute;
    }
    .crew-btns {
      margin: 0.8rem;
      height: 13px;
      width: 13px;
      background-color: #464850;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
      transition: background-color 1s ease;
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