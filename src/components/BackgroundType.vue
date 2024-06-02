<template>
  <div :class="backgroundClass" class="background-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import backgroundHomeDesktop from '@/assets/home/background-home-desktop.jpg'
import backgroundHomeTablet from '@/assets/home/background-home-tablet.jpg'
import backgroundHomeMobile from '@/assets/home/background-home-mobile.jpg'
import backgroundDestinationDesktop from '@/assets/destination/background-destination-desktop.jpg'
import backgroundDestinationTablet from '@/assets/destination/background-destination-tablet.jpg'
import backgroundDestinationMobile from '@/assets/destination/background-destination-mobile.jpg'
import backgroundCrewDesktop from '@/assets/crew/background-crew-desktop.jpg'
import backgroundCrewTablet from '@/assets/crew/background-crew-tablet.jpg'
import backgroundCrewMobile from '@/assets/crew/background-crew-mobile.jpg'
import backgroundTechnologyDesktop from '@/assets/technology/background-technology-desktop.jpg'
import backgroundTechnologyTablet from '@/assets/technology/background-technology-tablet.jpg'
import backgroundTechnologyMobile from '@/assets/technology/background-technology-mobile.jpg'

const { backgroundClass } = defineProps<{ backgroundClass: string }>()

const backgroundImages: string[] = [
  backgroundHomeDesktop,
  backgroundHomeTablet,
  backgroundHomeMobile,
  backgroundDestinationDesktop,
  backgroundDestinationTablet,
  backgroundDestinationMobile,
  backgroundCrewDesktop,
  backgroundCrewTablet,
  backgroundCrewMobile,
  backgroundTechnologyDesktop,
  backgroundTechnologyTablet,
  backgroundTechnologyMobile
]

const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(urls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`))
    })
  }))
}

onMounted(() => {
  preloadImages(backgroundImages)
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
    z-index: 0;
    background-color: #000;
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
    background-image:url('@/assets/destination/background-destination-desktop.jpg');
    @media (max-width: 1150px) {
      background-image:url('@/assets/destination/background-destination-tablet.jpg');
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/destination/background-destination-mobile.jpg');
    }
  }
  .crew {
    background-image:url('@/assets/crew/background-crew-desktop.jpg');
    @media (max-width: 1150px) {
      background-image:url('@/assets/crew/background-crew-tablet.jpg');
    }
    @media (max-width: 550px) {
      background-image:url('@/assets/crew/background-crew-mobile.jpg');
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