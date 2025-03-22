<template>

    <div class="container mx-auto ">
        <h2 class="section-heading mb-4">
            <span class="capitalize">Our Services</span>
            <!-- <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span> -->
        </h2>

        <!-- <h2 class="text-white">Some Main Topic</h2> -->

        <p class="text-white text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aspernatur reiciendis incidunt? Accusamus molestiae ullam tempora laboriosam animi tempore veritatis!</p>

        <div class="ServicesContainer grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-11 gap-y-6">
            <Service v-for="(service, index) in services" :key="index" class="service-item gg" :icon="service.icon"
                :title="service.title" :content="service.content"></Service>


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

    // gsap.utils.toArray(".service-item").forEach((card) => {
    //     card.addEventListener("mousemove", (e) => {
    //         const { width, height, left, top } = card.getBoundingClientRect();
    //         const x = (e.clientX - left - width / 2) / width * 20;
    //         const y = (e.clientY - top - height / 2) / height * 20;

    //         gsap.to(card, {
    //             rotateX: y,
    //             rotateY: x,
    //             duration: 0.3,
    //             ease: "power1.out",
    //         });
    //     });

    //     card.addEventListener("mouseleave", () => {
    //         gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    //     });
    // });


    //magnetic effect
    gsap.utils.toArray(".service-item").forEach((card) => {
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

    // gsap.utils.toArray(".service-item").forEach((card) => {
    //     card.addEventListener("mouseenter", () => {
    //         gsap.to(card, {
    //             rotateX: gsap.utils.random(-10, 10),
    //             rotateY: gsap.utils.random(-10, 10),
    //             scale: 1.05,
    //             duration: 0.3,
    //             ease: "power2.out"
    //         });
    //     });

    //     card.addEventListener("mouseleave", () => {
    //         gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
    //     });
    // });
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