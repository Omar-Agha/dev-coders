<template>

    <div>
        <h2 class="text-white font-bold text-7xl text-center">
            <span class="capitalize">Get to know </span>
            <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span>
        </h2>

        <p class="text-white text-center w-1/2 mx-auto">I'm a Frontend Web Developer building the Front-end of Websites
            and Web Applications that leads to the success of the overall product. Check out some of my work in the
            Projects section.</p>


        <div class="flex justify-between items-center mt-3">

            <div v-for="imagePath in avatarImagesPath" >
                <img :src="imagePath" class="w-[90%]">
            </div>



        </div>



        <!-- <GradientLine class="mx-auto w-[30%] mt-8" /> -->



    </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import { ref } from 'vue';
import avatar1 from "@/assets/img/avatar1.png";
import avatar2 from "@/assets/img/avatar2.png";
import avatar3 from "@/assets/img/avatar3.png";
import avatar4 from "@/assets/img/avatar4.png";
import avatar5 from "@/assets/img/avatar5.png";

const avatarImagesPath = ref([avatar2, avatar3, avatar1, avatar4, avatar5])

</script>
