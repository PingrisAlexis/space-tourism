<template>
    <div class="one-technology-container"> 
        <div class="image-container">
            <img v-if="width > breakpoint" :src="technology.images.portrait" :alt="technology.name">
            <img v-else :src="technology.images.landscape" :alt="technology.name">
        </div>
      <section class="details-container">
        <p class="description">THE TERMINOLOGY...</p>
        <h2 class="description">{{ technology.name }}</h2>
        <p class="description">{{ technology.description }}</p>
      </section>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    import { Technology } from '../types'
  
    const { technology } = defineProps<{ technology: Technology }>()

    const width = ref(window.innerWidth)

    const breakpoint = 1150

    const updateWidth = () => {
      width.value = window.innerWidth;
    }

    onMounted(() => {
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });
</script>

<style scoped lang="scss">
    @import url('@/assets/main.css');
    
    .one-technology-container {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 25rem;
        @media (max-width: 1450px) {
            padding-left: 1rem;
        }
        @media (max-width: 1150px) {
            flex-direction: column;
            padding-left: 0;
        }
        .image-container {
            @media (max-width: 1150px) {
                padding-top: 5rem;
                width: 100vw;
                height: 35rem;
            }
            img {
                height: 100%;
                width: 100%;    
                object-fit: cover;

            }
        }
        .details-container {
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            text-wrap: wrap;
            padding: 2rem;
            height: 30rem;
            text-wrap: nowrap;
            @media (max-width: 1150px) {
                position: relative;
                top: 6rem;
            }
            :first-child {
                font-size: 2.3rem;
            }
            h2 {
                font-size: 10rem;
                @media (max-width: 1150px) {
                    font-size: 5rem;
                    text-align: center;
                }
            }
            :nth-child(3) {
                font-size: 2.3rem;
                text-wrap: wrap;
                max-width: 52rem;
            }
            :first-child,
            :nth-child(3)
             {
                color: var(--color-sec);
                font-weight: 100;
                @media (max-width: 1150px) {
                    font-size: 2rem;
                    text-align: center;
            }
            }
        }
    }
</style>