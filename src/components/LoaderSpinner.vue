<template>
    <div class="loader-container background-container">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 3;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader {
    border: .4rem solid var(--color-bar-hover);
    border-top: .4rem solid white;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    animation: spin 2s linear infinite;
    left: 50%;
    top: 50%;
    z-index: 3;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>