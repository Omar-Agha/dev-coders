<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DevCodersTextIcon from './DevCodersTextIcon.vue';
import gsap from 'gsap';

const props = defineProps({
    dark: {
        type: [Boolean],
        default: false,
    },
})


const appLogo = ref<HTMLElement | null>(null);
const intervalTime = 4; // Change this value to set the interval in seconds

onMounted(() => {
    const logo_rotate_class = "rotate-icon"
    setInterval(() => {
        if (appLogo.value == null) return;
        if (appLogo.value.classList.contains(logo_rotate_class)) {
            appLogo.value.classList.remove(logo_rotate_class)
        }
        else {
            appLogo.value.classList.add(logo_rotate_class)
        }

    }, intervalTime * 1000);
});
</script>

<template>
    <div class="d-flex items-center group">
        <img ref="appLogo" src="@/assets/img/dev-coders-icon.png"
            class="w-[50px] group-hover:rotate-180 duration-500 transition-all">
        <DevCodersTextIcon :dark="props.dark" class="" />
    </div>
</template>


<style scoped>
.rotate-icon {
    @apply rotate-180;
}
</style>