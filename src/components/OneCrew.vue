<template>

    <h2>One Crew</h2>

</template>
<script setup>

import { defineProps } from 'vue'
import { ref, reactive, computed } from 'vue'
const props = defineProps({
crew: Object
})

// const test =  
computed(() => {
      return console.log(crew)
    });
</script>


<style scoped>

</style>
