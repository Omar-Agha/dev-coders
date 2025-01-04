<template>

    <div class="container mx-auto ">
        <h2 class="section-heading mb-4">
            <span class="capitalize">about</span>
            <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span>
        </h2>

        <p class="text-white text-center  mx-auto container">Here you will find more information about me, what I do,
            and my
            current skills mostly in terms of programming
            and technology</p>




        <GradientLine class="mx-auto w-[30%] mt-8" />



    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';


var showButton = false;
var cities = [];
</script>
