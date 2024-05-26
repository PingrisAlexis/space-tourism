<template>
        <div class="title">
            <span>{{ section.number }}</span>
                <h1>&nbsp;&nbsp;{{ section.description }}</h1>
        </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        section: Object
    })
</script>

<style scoped lang="scss">
    .title {
        z-index: 1;
        position: absolute;
        top: 16rem;
        left: 20rem;
        display: flex;
        @media (max-width: 1150px) {
            left: 8rem;
            top: 11rem;
        }
        @media (max-width: 800px) {
            width: 100vw;
            justify-content: center;
            align-items: center;
            left: 0;
        }
        span {
          color: #464850;
          font-weight: 600;
          font-size: 3.3rem;
          @media (max-width: 1150px) {
                font-size: 2.5rem;
            }
        }
        h1 {
          font-size: 3.3rem;
          color: var(--color-first);
            @media (max-width: 1150px) {
                font-size: 2.5rem;
            }
        }
    }
</style>