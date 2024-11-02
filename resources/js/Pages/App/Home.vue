<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ComputerSvg from '@/Components/Shapes/ComputerSvg.vue';

import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';
import LargeSquare from '@/Components/Shapes/LargeSquare.vue';
import SmallSquare from '@/Components/Shapes/SmallSquare.vue';
import ColorEnum from '@/enums/ColorEnum';
import AppHeaderNav from '@/Layouts/App/AppHeaderNav.vue';
import { translate } from '@/utils/translation';
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

            <section class="grid grid-cols-3">
                <div class="flex flex-col items-start justify-center space-y-4 p-8">
                    <h1 class="text-4xl  text-white font-light">
                        Your <span class="text-app-primary-glow font-bold">Vision</span><br>
                        Our <span class="text-app-secondary-glow font-extrabold">Code</span>
                    </h1>
                    <p class="text-gray-300 max-w-md">
                        Welcome to Our web Site <br/>
                        Let make Some thing Cool.
                    </p>
                    <button class="primary-button">
                        See More
                    </button>
                </div>
                <div class="col-span-2">
                    <ComputerSvg />
                </div>
            </section>
        </main>

        <LargeSquare class="absolute left-[10%] top-[10%] animate-float-reverse" />
        <SmallSquare class="absolute left-[30%] top-[20%] animate-float " />
        <GlowingCircle class="absolute left-[-200px] top-[-60px] animate-float " opacity="0.15" />
        <GlowingCircle class="absolute left-[25%] top-[30%] animate-float-reverse" opacity="0.09" />
        <GlowingCircle class="absolute right-[-150px] top-[100px]  " opacity="0.12" />
        <GlowingCircle class="absolute left-[35%] top-[-370px]  " opacity="0.1" />
        <GlowingCircle class="absolute right-[-200px] top-[-300px] " opacity="0.4" :color="ColorEnum.Blue" />



    </div>
</template>

<style></style>



