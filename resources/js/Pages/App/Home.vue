<script setup>
import AppHeaderNav from '@/Layouts/App/AppHeaderNav.vue';
import Hero from './Hero.vue';
import AboutUs from './AboutUs.vue';
import Spacer from '@/Components/Spacer.vue';
import KnowUs from './KnowUs.vue';

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

</script>

<template>
    <div class="bg-app-primary-dark min-h-screen">
        <main class="container mx-auto">
            <AppHeaderNav class="h-[15vh]" />
            <Hero class="min-h-[85vh]" />
            <Spacer />
            <AboutUs />
            <Spacer />

            <Spacer />

            <KnowUs />
        </main>



    </div>
</template>

<style></style>
