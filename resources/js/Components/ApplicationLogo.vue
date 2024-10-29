<script setup lang="ts">
import DevCodersTextIcon from './DevCodersTextIcon.vue';
const props = defineProps({
    dark: {
        type: [Boolean],
        default: false,
    },
})
</script>

<template>
    <div class="d-flex items-center">
        <img src="@/assets/img/dev-coders-icon.png" class="w-[75px]">
        <DevCodersTextIcon :dark="props.dark" />
    </div>
</template>
