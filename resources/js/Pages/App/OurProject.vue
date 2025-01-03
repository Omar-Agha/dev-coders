<template>

    <div>
        <h2 class="text-white font-bold text-7xl text-center">
            <span class="capitalize">Our Project</span>

        </h2>


        <div class="flex justify-between items-center mt-3">

            <div v-for="imagePath in projectImages">
                <img :src="imagePath" class="w-[90%]">
            </div>



        </div>





    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

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
