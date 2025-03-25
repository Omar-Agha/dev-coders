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
}]


</script>

<template>

    <div>
        <h2 class="text-white font-bold text-7xl text-center">
            <span class="capitalize">Our Project</span>

        </h2>


        <div class="flex justify-start gap-5 mt-3">

            <div v-for="project in projects">
                <!-- <img :src="imagePath" class="w-[90%]"> -->
                <Project :app-store-url="project.appStoreUrl" :image="project.Image" :project-name="project.ProjectName"
                    :project-description="project.ProjectDescription"></Project>
            </div>




            <!-- <div class="overlay group-hover:translate-y-0"></div> -->





        </div>


        <button class="text-red-500 bg-black" @click="openModal">open it </button>

        <!-- <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="onModalClosed">
            
        </Modal> -->


        <VBtn color="surface-variant" class="bg-black" text="Open Dialog" variant="flat"></VBtn>




    </div>


    <VDialog max-width="500" v-model="show">

        <!-- <template v-slot:default="{ isActive }"> -->
        <VCard title="Dialog">
            <VCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </VCardText>

            <VCardActions>
                <VSpacer></VSpacer>

                <VBtn text="Close Dialog" @click="show = false"></VBtn>
            </VCardActions>
        </VCard>
        <!-- </template> -->
    </VDialog>

</template>


<style scoped></style>