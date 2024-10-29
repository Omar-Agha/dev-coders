<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Head, Link } from '@inertiajs/vue3';
import { VAppBarNavIcon } from 'vuetify/lib/components/index.mjs';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <link href="https://fonts.cdnfonts.com/css/elvalle" rel="stylesheet">



    <div class="p-20 bg-app-primary-dark min-h-screen">
        <ApplicationLogo />

        <nav class="flex justify-between items-center p-4">
            <img src="/path/to/logo.png" alt="Logo" class="h-8">
            <ul class="flex space-x-6 text-white">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <section class="flex flex-col items-start justify-center space-y-4 p-8">
            <h1 class="text-4xl font-bold text-white">
                Your <span class="text-gradient">Vision</span><br>Our <span class="text-gradient-blue">Code</span>
            </h1>
            <p class="text-gray-300 max-w-md">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            <button
                class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
                See More
            </button>
        </section>
    </div>
</template>

<style>
@keyframes float {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(10px, -10px);
    }
}

.float-animation {
    animation: float 5s ease-in-out infinite;
}
</style>
