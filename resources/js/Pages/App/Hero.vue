<template>
    <!-- grid-cols-3 md:grid-cols-6 -->
    <section class="grid grid-cols-1 lg:grid-cols-3">
        <div class="flex flex-col items-start justify-center space-y-4 p-8">
            <h1 class="text-7xl  text-white font-light">
                Your <span class="text-app-primary-glow font-bold">Vision</span><br>
                Our <span class="text-app-secondary-glow font-extrabold">Code</span>
            </h1>
            <p class="text-gray-300 max-w-md">
                Welcome to Our web Site <br class="hidden lg:block" />
                Let make Some thing Cool.
            </p>
            <button class="primary-button">
                See More
            </button>
        </div>
        <div class="col-span-2">
            <ComputerSvg />
        </div>
        <div class="hidden md:block">
            <LargeSquare class="absolute left-[10%] top-[10%] animate-float-reverse" />
            <SmallSquare class="absolute left-[30%] top-[20%] animate-float " />
            <GlowingCircle class="absolute left-[-200px] top-[-60px] animate-float " opacity="0.15" />
            <GlowingCircle class="absolute left-[25%] top-[30%] animate-float-reverse" opacity="0.09" />
            <GlowingCircle class="absolute right-[-150px] top-[100px]  " opacity="0.12" />
            <GlowingCircle class="absolute left-[35%] top-[-370px]  " opacity="0.1" />
            <GlowingCircle class="absolute right-[-200px] top-[-300px] " opacity="0.4" :color="ColorEnum.Blue" />

        </div>
    </section>

</template>


<script setup>
import ComputerSvg from '@/Components/Shapes/ComputerSvg.vue';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';
import LargeSquare from '@/Components/Shapes/LargeSquare.vue';
import SmallSquare from '@/Components/Shapes/SmallSquare.vue';
import ColorEnum from '@/enums/ColorEnum';

</script>