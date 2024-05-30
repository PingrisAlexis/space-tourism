<template>
 <div class="screen-slider-container" v-touch:swipe.left="nextTab" v-touch:swipe.right="prevTab">  
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref, watch } from 'vue'

  const props = defineProps<{currentTab: number;collection: Array<any>;}>()

  const emit = defineEmits(['update-tab'])

  const currentTab = ref(props.currentTab)
  const collection = props.collection

  const nextTab = (): void => {
    if (currentTab.value < collection.length - 1) {
      currentTab.value++
    } else {
      currentTab.value = 0
    }
    emit('update-tab', currentTab.value)
  }

  const prevTab = (): void => {
    if (currentTab.value > 0) {
      currentTab.value--
    } else {
      currentTab.value = collection.length - 1
    }
    emit('update-tab', currentTab.value)
  }

  watch(() => props.currentTab, (newVal) => {
    currentTab.value = newVal
  })
</script>

<style scoped lang="scss">
  @import url('@/assets/main.scss');
.screen-slider-container {
  z-index: 2 !important;
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
