<template>
  <div  :class="backgroundClass" class="background-container"></div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const backgroundClass: String = computed(() => {
    switch (route.path) {
      case '/':
        return 'home';
      case '/destination':
        return 'destination';
      case '/crew':
        return 'crew';
      case '/technology':
        return 'technology';
      default:
        return 'Unknown';
    }
  })
</script>

<style scoped lang="scss">
  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0
  }
  .home {
    background-image:url('@/assets/home/background-home-desktop.jpg');
    @media (max-width: 1150px) {
        background-image:url('@/assets/home/background-home-tablet.jpg');
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/home/background-home-mobile.jpg');
    }
  }
  .destination {
    background-image:url('@/assets/destination/background-destination-desktop.jpg') !important;
    @media  (max-width: 1150px) {
      background-image:url('@/assets/destination/background-destination-tablet.jpg') !important;
    }
    @media  (max-width: 550px) {
      background-image:url('@/assets/destination/background-destination-mobile.jpg') !important;
    }
  }
  .crew {
    background-image:url('@/assets/crew/background-crew-desktop.jpg') !important;
    @media (max-width: 1150px) {
      background-image:url('@/assets/crew/background-crew-tablet.jpg') !important;
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/crew/background-crew-mobile.jpg') !important;
    }
  }
  .technology {
    background-image:url('@/assets/technology/background-technology-desktop.jpg');
    @media (max-width: 1150px) {
      background-image:url('@/assets/technology/background-technology-tablet.jpg');
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/technology/background-technology-mobile.jpg');
    }
  }
</style>