<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <nav class="flex justify-between items-center p-4">
        <ApplicationLogo />
        <ul class="flex space-x-6 text-white font-bold text-2xl">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>