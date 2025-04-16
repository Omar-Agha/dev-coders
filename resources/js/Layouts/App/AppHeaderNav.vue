<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { ChangeAppLanguageUseCase, GetAppLanguage } from '@/UseCases/AppLocalizatoinUsecase';
import { scrollToSection } from '@/utils/pageUtils';
import { L } from '@/utils/translation';
import { translate } from '@/utils/translation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted, ref, Transition } from 'vue';
import { VIcon } from 'vuetify/lib/components/index.mjs';


const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};


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

    <nav class="sticky top-0 backdrop-blur-md shadow-lg h-[50px] rounded-md z-[1000] ">
        <div class="container mx-auto flex justify-between items-center p-4 pt-0">
            <!-- Logo -->
            <div class="flex justify-between items-center gap-10">

                <ApplicationLogo class="pop-animated cursor-pointer" @click="scrollToSection('hero-section')" />

                <ul class="hidden md:flex  text-white font-bold text-lg gap-5">
                    <li class="pop-animated cursor-pointer z-20 line-effect"
                        :class="{ 'active-nav-item': GetAppLanguage() === 'en' }"
                        @click="ChangeAppLanguageUseCase('en')">{{ L("localize-en") }}</li>
                    <li class="pop-animated cursor-pointer z-20 line-effect"
                        :class="{ 'active-nav-item': GetAppLanguage() === 'ar' }"
                        @click="ChangeAppLanguageUseCase('ar')">{{ L("localize-ar") }}</li>

                </ul>
            </div>

            <!-- Hamburger Icon (Only Visible on Mobile) -->
            <button @click="toggleMenu" class="relative w-8 h-8 flex flex-col gap-2 md:hidden z-50 ">
                <span class="block w-8 h-[2px] bg-white transition-transform duration-300"
                    :class="{ 'rotate-45 translate-y-[10px]': isMenuOpen }"></span>
                <span class="block w-8 h-[2px] bg-white transition-opacity duration-300"
                    :class="{ 'opacity-0': isMenuOpen }"></span>
                <span class="block w-8 h-[2px] bg-white transition-transform duration-300"
                    :class="{ '-rotate-45 -translate-y-[10px]': isMenuOpen }"></span>
            </button>

            <!-- Desktop Navbar -->
            <ul class="hidden md:flex  text-white font-bold text-2xl gap-5">
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'hero-section' }"
                    @click="scrollToSection('hero-section')">{{ L("About") }}</li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'our-services-section' }"
                    @click="scrollToSection('our-services-section')">{{ L("Services") }}</li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'our-projects-section' }"
                    @click="scrollToSection('our-projects-section')">{{ L("Projects") }}</li>
                <li class="pop-animated cursor-pointer z-20 line-effect"
                    :class="{ 'active-nav-item': activeSection === 'contact-us-section' }"
                    @click="scrollToSection('contact-us-section')">{{ L("Contact") }}</li>
            </ul>
        </div>

        <!-- Mobile Dropdown Menu -->
        <Transition name="slide-down">
            <ul v-if="isMenuOpen"
                class="absolute top-[50px] left-0 w-full  bg-opacity-90 text-white text-xl flex flex-col items-center py-4 space-y-4  backdrop-blur-md shadow-lg bg-black/90">
                <li @click="scrollToSection('hero-section'); closeMenu()" class="cursor-pointer">About</li>
                <li @click="scrollToSection('our-services-section'); closeMenu()" class="cursor-pointer">Services</li>
                <li @click="scrollToSection('our-projects-section'); closeMenu()" class="cursor-pointer">Projects</li>
                <li @click="scrollToSection('contact-us-section'); closeMenu()" class="cursor-pointer">Contact</li>
            </ul>
        </Transition>
    </nav>
</template>


<style scoped>
.line-effect {
    @apply relative after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0;
}

.active-nav-item {
    @apply relative after:absolute after:bottom-[-5px] after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-full after:left-0;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
<!-- <style scoped>

.line-effect {
    @apply relative after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0;
}

.active-nav-item {
    @apply relative after:absolute after:bottom-[-5px] after:h-[3px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:w-full after:left-0;
}
</ -->