<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(()=>{

    gsap.from(".pop-animated", {
        scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
            
    });
})
</script>

<template>
    <nav class="flex justify-between items-center p-4">
        <ApplicationLogo class="pop-animated" />
        <ul class="nav flex space-x-6 text-white font-bold text-2xl">
            <li class="pop-animated"><a href="#">About</a></li>
            <li class="pop-animated"><a href="#">Projects</a></li>
            <li class="pop-animated"><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>