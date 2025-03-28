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
    <div class="d-flex items-center group">
        <img src="@/assets/img/dev-coders-icon.png" class="w-[50px] group-hover:rotate-180 duration-500 transition-all">
        <DevCodersTextIcon :dark="props.dark" class="hidden md:flex " />
    </div>
</template>
