<script setup lang="ts">
import { reactive } from 'vue';


const props = defineProps({
    dark: {
        type: [Boolean],
        default: false,
    },
})

const textColorClassObject = reactive({
    active: true,
    'text-danger': props.dark
})
</script>
<template>
    <!-- <span>de<span class="text-primary-purple">V</span><span class="text-primary-blue">C</span>oders</span> -->
    <div class=" text-3xl mt-2 " :class="props.dark ? 'text-black' : 'text-white'">
        de<span class="text-app-primary">V</span><span class="text-app-secondary">C</span>oders
    </div>

</template>