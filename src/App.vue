<template>
    <div>
        <TheHeader />
        <LoaderSpinner v-if="isLoading"/>
        <router-view/> 
        <BackgroundType :backgroundClass="pathname"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import BackgroundType from '@/components/BackgroundType.vue'
import LoaderSpinner from '@/components/LoaderSpinner.vue'
import { computed } from 'vue'
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const pathname = computed<string>(() => {
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
        return '';
    }
  })

const isLoading = ref<boolean>(true)
const router = useRouter()

router.isReady().then(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 400);
});

router.beforeEach(() => {
        isLoading.value = true
});

router.afterEach(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 400);
});
</script>


