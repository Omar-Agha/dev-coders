<template>

    <div class="container mx-auto ">
        <h2 class="section-heading mb-4">
            <span class="capitalize">Our Services</span>
            <!-- <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span> -->
        </h2>

        <!-- <h2 class="text-white">Some Main Topic</h2> -->
         
        <p class="text-white text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur reiciendis incidunt? Accusamus molestiae ullam tempora laboriosam animi tempore veritatis!</p>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-6">
            <Service icon="mdi-code-tags" title="Dev & Coding" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            <Service icon="mdi-pencil-ruler" title="Analysis" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            <Service icon="mdi-palette" title="Design" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            <Service icon="mdi-cloud-cog-outline" title="Cloud Services" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            <Service icon="mdi-cloud-cog-outline" title="Cloud Services" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            <Service icon="mdi-cloud-cog-outline" title="Cloud Services" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde rerum, voluptates itaque voluptas aperiam."/>
            
        </div>

<!-- rgba(161, 203, 221, 1) -->
        <GradientLine class="mx-auto w-[30%] mt-8" />



    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import Service from './Services/Service.vue';


var showButton = false;
var cities = [];
</script>
