<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { scrollToSection } from '@/utils/pageUtils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref } from 'vue';

// onMounted(() => {

//     gsap.from(".pop-animated", {
//         scale: 0,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out"

//     });
// })


gsap.registerPlugin(ScrollTrigger);

const sections = ['hero-section', 'our-services-section', 'our-projects-section', 'contact-us-section'];
const activeSection = ref<string | null>(null);
onMounted(() => {

    gsap.from(".pop-animated", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"

    });

    sections.forEach((section) => {
        ScrollTrigger.create({
            trigger: `#${section}`,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => (activeSection.value = section),
            onEnterBack: () => (activeSection.value = section),
        });
    });
});
</script>

<template>
    <nav class=" sticky top-0  backdrop-blur-md shadow-lg h-[50px] rounded-md  z-[1000]">
        <div class="container mx-auto flex justify-between items-center p-4 pt-0">

            <ApplicationLogo class="pop-animated cursor-pointer" @click="scrollToSection('hero-section')" />
            <ul class="nav flex space-x-6 text-white font-bold text-2xl ">
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'hero-section' }"
                    @click="scrollToSection('hero-section')">
                    About
                </li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'our-services-section' }"
                    @click="scrollToSection('our-services-section')">
                    Services</li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'our-projects-section' }"
                    @click="scrollToSection('our-projects-section')">
                    Projects</li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'contact-us-section' }"
                    @click="scrollToSection('contact-us-section')">
                    Contact</li>

            </ul>
        </div>
    </nav>
</template>


<style scoped>
.line-effect {
    @apply relative after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0;
}

.active-nav-item {
    @apply relative after:absolute after:bottom-[-5px] after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-full after:left-0;
}
</style>