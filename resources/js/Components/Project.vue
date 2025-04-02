<script setup lang="ts">
import ViewMore from '@/assets/icons/ViewMore.vue';
import { VIcon } from 'vuetify/lib/components/index.mjs';

const props = defineProps({
    image: String,
    projectName: String,
    projectDescription: String,
    githubUrl: String,
    appStoreUrl: String,
    googlePlayUrl: String,
    siteUrl: String
})
</script>
<template>

    <div
        class=" group relative w-80 md:w-96 h-52 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-md transition-transform duration-300 hover:scale-105 ">
        <!-- Background Image -->
        <img :src="props.image"
            class="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110" />

        <!-- Overlay (Hidden by Default) -->
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:!opacity-100 transition-all duration-300 ">
        </div>

        <!-- Text Content -->
        <div
            class=" h-[100%] absolute bottom-0 left-0 w-full p-4 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex flex-col justify-between">
            <div class="" style="flex-basis: 2;">

                <h3 class="text-lg font-semibold">{{ props.projectName }}</h3>
                <p class="text-sm opacity-80 ">{{ props.projectDescription }}</p>
                <!-- <div
                    class="w-[75px] h-[75px] cursor-pointer absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2">

                    <ViewMore />
                </div> -->
            </div>

            <div class="flex gap-4 mt-2 " style="flex-basis: 1;">
                <a :href="props.siteUrl" class="text-gray-300  hover:text-app-primary-glow transition"
                    v-if="props.siteUrl">

                    <VIcon icon="mdi-web" size="small" class="bg-transparent cursor-pointer" />

                </a>

                <a :href="props.githubUrl" class="text-gray-300  hover:text-app-primary-glow transition"
                    v-if="props.githubUrl">

                    <VIcon icon="mdi-github" size="small" class="cursor-pointer" />
                </a>

                <a :href="props.googlePlayUrl" class="text-gray-300  hover:text-app-primary-glow transition"
                    v-if="props.googlePlayUrl">

                    <VIcon icon="mdi-google-play" size="small" class="bg-transparent cursor-pointer" />

                </a>
                <a :href="props.appStoreUrl" class="text-gray-300  hover:text-app-primary-glow transition"
                    v-if="props.appStoreUrl">

                    <VIcon icon="mdi-apple" size="small" class="bg-transparent cursor-pointer" />

                </a>
            </div>
        </div>



    </div>
</template>

<style scoped></style>