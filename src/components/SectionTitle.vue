<template>
        <div class="title">
            <span>{{ section.number }}</span>
                <h1>&nbsp;&nbsp;{{ section.description }}</h1>
        </div>
</template>

<script setup>
 import { defineProps } from 'vue'

    const props = defineProps({
        section: Object
    })
</script>


<style scoped lang="scss">

.title {
        z-index: 1;
        display: flex;
        position: absolute;
        left: 20rem;
        top: 18rem;
        width: 100vw;
        display: flex;
     
        @media (max-width: 1150px) {
            left: 8rem;
            top: 11rem;
        }
        @media (max-width: 800px) {
            justify-content: center;
            align-items: center;
            left: 0;
        }
        span {
          color: #383B4B;
          font-weight: 600;
          font-size: 3.3rem;
          @media (max-width: 1150px) {
            font-size: 2.5rem;
            }
        }
        h1 {
          font-size: 3.3rem;
          color: white;
            @media (max-width: 1150px) {
                font-size: 2rem;
            }
        }
    }
</style>
