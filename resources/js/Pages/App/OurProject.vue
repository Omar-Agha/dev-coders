<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import samaArt from "@/assets/img/projects/sama-art.png";
import brelando from "@/assets/img/projects/brelando.png";
import 'swiper/css';

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { VBtn, VCard, VCardActions, VCardText, VDialog, VIcon, VSpacer } from 'vuetify/lib/components/index.mjs';
import Project from '@/Components/Project.vue';
import Modal from '@/Components/Modal.vue';


const maxWidth = "lg"
const closeable = false
const show = ref(false)
const btn = ref(null)

const onModalClosed = () => {
    console.log('closed');

}

const openModal = () => {
    show.value = true;
}
const closeDialog = () => {
    show.value = false;

};


const projects = [{
    ProjectName: "SamaArt",
    ProjectDescription: "Implement a unique design for samaart",
    SiteUrl: "samart.com",
    Image: samaArt,
},
{
    ProjectName: "Breelando",
    ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
    SiteUrl: "breelando.xyz",
    Image: brelando,
},
{
    ProjectName: "Breelando",
    ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
    SiteUrl: "breelando.xyz",
    Image: brelando,
},
{
    ProjectName: "Breelando",
    ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
    SiteUrl: "breelando.xyz",
    Image: brelando,
},
{
    ProjectName: "Breelando",
    ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
    SiteUrl: "breelando.xyz",
    Image: brelando,
},
{
    ProjectName: "Breelando",
    ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
    SiteUrl: "breelando.xyz",
    Image: brelando,
}
]


</script>

<template>

    <div>
        <h2 class="text-white font-bold text-7xl text-center">
            <span class="capitalize">Our Project</span>

        </h2>


        <div
            class="flex justify-start gap-5 mt-3 overflow-x-scroll md:overflow-hidden flex-nowrap md:grid md:grid-cols-3  overflow-y-hidden">
            <div v-for="project in projects" class="rounded-2xl">
                <Project :app-store-url="project.appStoreUrl" :image="project.Image" :project-name="project.ProjectName"
                    :project-description="project.ProjectDescription"></Project>

            </div>
        </div>
    </div>



</template>


<style scoped></style>