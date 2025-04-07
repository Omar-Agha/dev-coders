<script setup lang="ts">
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import samaArtPoster from "@/assets/img/projects/sama-art.png";
import brelandoPoster from "@/assets/img/projects/brelando.png";
import educarPoster from "@/assets/img/projects/educar.png";
import ChatZonePoster from "@/assets/img/projects/chat-zone.png";

import 'swiper/css';


import Project from '@/Components/Project.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';
import ColorEnum from '@/enums/ColorEnum';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';




const projects = [
    //     {
    //     ProjectName: "SamaArt",
    //     ProjectDescription: "Implement a unique design for samaart",
    //     Image: samaArtPoster,
    //     SiteUrl: "https://samaart.com",
    //     googlPlayUrl: "",
    //     appStoreUrl: ""
    // },
    {
        ProjectName: "Breelando",
        ProjectDescription: " Brelando is mobile project was designed to share content with users.  the app supports realtime message, firebase, video processing, and many other ...",
        Image: brelandoPoster,
        SiteUrl: "",
        googlPlayUrl: "https://play.google.com/store/apps/details?id=com.breelando.breelando&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/sa/app/breelando/id6670703145",
        githubUrl: ""
    },
    {
        ProjectName: "Educar",
        ProjectDescription: "Educar is mobile app that helps to manage car training lessons & courses, by scheduling and reserving practical lesson for students",
        Image: educarPoster,
        SiteUrl: "",
        googlPlayUrl: "",
        appStoreUrl: "",
        githubUrl: ""

    },
    {
        ProjectName: "ChatZone",
        ProjectDescription: "Chat Zone is an ios/android application that connects users with each other, this app supports realtime communication with live stream and realtime chat  ",
        Image: ChatZonePoster,
        SiteUrl: "",
        googlPlayUrl: "",
        appStoreUrl: "",
        githubUrl: ""

    },

]

onMounted(() => {

    gsap.from('.projects-container .project', {

        opacity: 0,
        stagger: 0.3,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%"
        }
    });
})
</script>

<template>

    <div class="relative">

        <h2 class="text-white font-bold text-7xl text-center mb">
            <span class="capitalize text-app-primary-700">Our</span>
            <span class="capitalize text-app-secondary-600">Projects</span>
        </h2>


        <div
            class="projects-container flex justify-start gap-5 mt-3 overflow-x-scroll md:overflow-hidden flex-nowrap md:grid md:grid-cols-3  overflow-y-hidden">
            <div v-for="project in projects" class="rounded-2xl">
                <Project :app-store-url="project.appStoreUrl" :google-play-url="project.googlPlayUrl"
                    :image="project.Image" :project-name="project.ProjectName" cla
                    :project-description="project.ProjectDescription" class="project z-20"
                    :github-url="project.githubUrl" />

            </div>
        </div>

        <div class="">

            <GlowingCircle class="absolute left-[-400px] top-[0px] animate-float " :opacity="0.25" />
            <GlowingCircle class="absolute left-[25%] top-[10%] animate-float-reverse" :opacity="1"
                :color="ColorEnum.Blue" />
            <GlowingCircle class="absolute left-[900px] top-[-150px] animate-float " :opacity="0.25" />
        </div>
    </div>



</template>


<style scoped></style>