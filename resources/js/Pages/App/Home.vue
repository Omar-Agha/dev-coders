<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import AppHeaderNav from '@/Layouts/App/AppHeaderNav.vue';
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




    <div class=" bg-app-primary-dark min-h-screen ">

        <main class="container mx-auto">


          

            <AppHeaderNav />

            <section class="flex flex-col items-start justify-center space-y-4 p-8">
                <h1 class="text-4xl  text-white font-light">
                    Your <span class="text-app-primary-glow font-bold">Vision</span><br>
                    Our <span class="text-app-secondary-glow font-extrabold">Code</span>
                </h1>
                <p class="text-gray-300 max-w-md">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
                </p>
                <button class="primary-button">
                    See More
                </button>
            </section>
        </main>

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
