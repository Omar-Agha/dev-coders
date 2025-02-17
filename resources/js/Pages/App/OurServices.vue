<template>

    <div class="container mx-auto ">
        <h2 class="section-heading mb-4">
            <span class="capitalize">Our Services</span>
            <!-- <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span> -->
        </h2>

        <!-- <h2 class="text-white">Some Main Topic</h2> -->
         
        <p class="text-white text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur reiciendis incidunt? Accusamus molestiae ullam tempora laboriosam animi tempore veritatis!</p>
        <div class="ServicesContainer grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-6">
            <Service v-for="(service, index) in services" :key="index" class="service-item" :icon="service.icon"  :title="service.title" :content="service.content"></Service>
            
            
        </div>

<!-- rgba(161, 203, 221, 1) -->
        <GradientLine class="mx-auto w-[30%] mt-8" />



    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import Service from './Services/Service.vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { onMounted } from 'vue';

const services = [
  { icon: "mdi-code-tags", title: "Dev & Coding", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { icon: "mdi-pencil-ruler", title: "Analysis", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { icon: "mdi-palette", title: "Design", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { icon: "mdi-cloud-cog-outline", title: "Cloud Services", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { icon: "mdi-cloud-cog-outline", title: "Cloud Services", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { icon: "mdi-cloud-cog-outline", title: "Cloud Services", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

gsap.registerPlugin(ScrollTrigger)
onMounted(()=>{

    gsap.from('.service-item',{
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger:{
            trigger:".ServicesContainer",
            start:"top 80%"
        }
    })
})


</script>
