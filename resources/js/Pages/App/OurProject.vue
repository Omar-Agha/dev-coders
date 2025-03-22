<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import samaArt from "@/assets/img/projects/sama-art.png";

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import { VBtn, VIcon } from 'vuetify/lib/components/index.mjs';

const projectImages = ref([
    projectWhiteImage,
    projectDarkImage,
    projectWhiteImage,
    projectDarkImage,
    projectWhiteImage,
    projectDarkImage,
    projectWhiteImage,
    projectDarkImage,
])



</script>

<template>

    <div>
        <h2 class="text-white font-bold text-7xl text-center">
            <span class="capitalize">Our Project</span>

        </h2>


        <div class="flex justify-between items-center mt-3">

            <!-- <div v-for="imagePath in projectImages">
                <img :src="imagePath" class="w-[90%]">
            </div> -->

            <div
                class=" group relative w-80 h-52 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-md transition-transform duration-300 hover:scale-105 ">
                <!-- Background Image -->
                <img :src="samaArt"
                    class="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110" />

                <!-- Overlay (Hidden by Default) -->
                <div
                    class="absolute inset-0 bg-black/60 opacity-0 group-hover:!opacity-100 transition-all duration-300 ">
                </div>

                <!-- Text Content -->
                <div
                    class=" h-[100%] absolute bottom-0 left-0 w-full p-4 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex flex-col justify-between">
                    <div class="" style="flex-basis: 2;">

                        <h3 class="text-lg font-semibold">Project Name</h3>
                        <p class="text-sm opacity-80">Short project description here...</p>
                    </div>

                    <div class="flex gap-4 mt-2 " style="flex-basis: 1;">
                        <a href="#" class="text-gray-300  hover:text-app-primary-glow transition">

                            <VIcon icon="mdi-web" size="small" class="bg-transparent " />

                        </a>

                        <a href="#" class="text-gray-300  hover:text-app-primary-glow transition">

                            <VIcon icon="mdi-github" size="small" />
                        </a>

                        <a href="#" class="text-gray-300  hover:text-app-primary-glow transition">

                            <VIcon icon="mdi-google-play" size="small" class="bg-transparent " />

                        </a>
                        <a href="#" class="text-gray-300  hover:text-app-primary-glow transition">

                            <VIcon icon="mdi-apple" size="small" class="bg-transparent " />

                        </a>
                    </div>
                </div>



            </div>

            <!-- <div class="overlay group-hover:translate-y-0"></div> -->

        </div>







    </div>

</template>


<style scoped>
/* .project-card {
    overflow: hidden;
    position: relative;
}

.project-card .overlay {
    content: "";
    
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    transform: translateY(100%);

} */
</style>