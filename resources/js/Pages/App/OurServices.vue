<template>

    <div class="container mx-auto relative">


        <h2 class="text-white font-bold text-7xl text-center mb ">
            <span class="capitalize text-app-primary-700 z-20">{{ L("OurServices1") }}</span>
            <span class="capitalize text-app-secondary-600 z-20">{{ L("OurServices2") }}</span>
        </h2>



        <p class="text-white text-center my-3  mb-6 text-lg z-20">{{ L("OurServicesSubheading") }}</p>

        <div class="ServicesContainer grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-11 gap-y-6 z-20">
            <Service v-for="(service, index) in services" :key="index" class="service-item z-20" :icon="service.icon"
                :title="service.title" :content="service.content"></Service>


        </div>

        <!-- rgba(161, 203, 221, 1) -->
        <GradientLine class="mx-auto w-[30%] mt-8" />


        <div class="">

            <GlowingCircle class="absolute left-[-400px] top-[0px] animate-float " :opacity="0.25" />
            <GlowingCircle class="absolute left-[25%] top-[10%] animate-float-reverse" :opacity="1"
                :color="ColorEnum.Blue" />
            <GlowingCircle class="absolute left-[900px] top-[-150px] animate-float " :opacity="0.25" />
        </div>


    </div>

</template>
<script setup lang="ts">
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import Service from './Services/Service.vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { onMounted } from 'vue';
import ColorEnum from '@/enums/ColorEnum';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';

const services = [
    { icon: "mdi-code-braces", title: L("OurServicesWebDevelopment"), content: L("OurServicesWebDevelopmentDescription") },
    { icon: "mdi-cellphone-check", title: L("OurServicesMobileDevelopment"), content: L("OurServicesMobileDevelopmentDescription") },
    { icon: "mdi-palette-outline", title: L("OurServicesUI"), content: L("OurServicesUIDescription") },
    { icon: "mdi-cloud-cog-outline", title: L("OurServicesDevOps"), content: L("OurServicesDevOpsDescription") },
    { icon: "mdi-test-tube", title: L("OurServicesTesting"), content: L("OurServicesTestingDescription") },
    { icon: "mdi-chart-bar", title: L("OurServicesSA"), content: L("OurServicesSADescription") },
];

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {

    gsap.from('.service-item', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".ServicesContainer",
            start: "top 80%"
        }
    });


    //magnetic effect
    gsap.utils.toArray<HTMLElement>(".service-item").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = card.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / width * 10;
            const y = (e.clientY - top - height / 2) / height * 10;

            gsap.to(card, {
                x: x,
                y: y,
                scale: 1.05,
                duration: 0.3,
                ease: "power1.out",
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { x: 0, y: 0, scale: 1, duration: 0.5 });
        });
    });


})


</script>


<style scoped>
.service-item {
    box-shadow: 0 0 17px #A1D6FF,
        inset 0 0 16px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

/* shimmer effect */
.service-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 150%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transform: skewX(-20deg);
    transition: left 0.6s ease-out;
}

.service-item:hover::before {
    left: 100%;
}
</style>