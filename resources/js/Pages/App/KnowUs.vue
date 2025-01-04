<template>

    <div class="container mx-auto">
        <h2 class="section-heading">
            <span class="capitalize">Get to know </span>
            <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span>
        </h2>



        <p class="text-white text-center mx-auto  mt-5 mb-5">I'm a Frontend Web Developer building the Front-end of
            Websites
            and Web Applications that leads to the success of the overall product. Check out some of my work in the
            Projects section.</p>

        <!--  -->

        <Swiper :centered-slides="true" :navigation="true" @slide-change="onSlideChange" :slides-per-view="2"
            :space-between="0"  :breakpoints="swiperBreakpoints">

            <SwiperSlide v-for="(imagePath, index) in avatarImagesPath" :key="index" class="">

                <img :src="imagePath" class="w-[90%] transition-all" :class="{
                    'scale-100 grayscale-0': activeIndex === index,
                    'scale-75 grayscale': activeIndex !== index
                }">
            </SwiperSlide>

        </Swiper>




        <GradientLine class="mx-auto w-[30%] mt-8" />



    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import { ref } from 'vue';
import avatar1 from "@/assets/img/our-team/avatar1.png";
import avatar2 from "@/assets/img/our-team/avatar2.png";
import avatar3 from "@/assets/img/our-team/avatar3.png";
import avatar4 from "@/assets/img/our-team/avatar4.png";
import avatar5 from "@/assets/img/our-team/avatar5.png";

import { SwiperSlide, Swiper } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

const swiperBreakpoints = ref({
    640: {
        slidesPerView: 2,
        spaceBetween: 5,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 5,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
})
// const avatarImagesPath = ref([avatar2, avatar3, avatar1, avatar4, avatar5])
const avatarImagesPath = ref([avatar1, avatar1, avatar1, avatar1, avatar1])

const activeIndex = ref(0);



const onSlideChange = (swiper) => {
    activeIndex.value = swiper.activeIndex;
};


</script>
