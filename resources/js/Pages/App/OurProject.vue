<script setup lang="ts">
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import samaArtPoster from "@/assets/img/projects/sama-art.png";
import brelandoPoster from "@/assets/img/projects/brelando.png";
import educarPoster from "@/assets/img/projects/educar.png";

import 'swiper/css';


import Project from '@/Components/Project.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';




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

    <div>

        <h2 class="text-white font-bold text-7xl text-center mb">
            <span class="capitalize text-app-primary-700">Our</span>
            <span class="capitalize text-app-secondary-600">Projects</span>
        </h2>


        <div
            class="projects-container flex justify-start gap-5 mt-3 overflow-x-scroll md:overflow-hidden flex-nowrap md:grid md:grid-cols-3  overflow-y-hidden">
            <div v-for="project in projects" class="rounded-2xl">
                <Project :app-store-url="project.appStoreUrl" :google-play-url="project.googlPlayUrl"
                    :image="project.Image" :project-name="project.ProjectName"
                    :project-description="project.ProjectDescription" class="project" :github-url="project.githubUrl" />

            </div>
        </div>
    </div>



</template>


<style scoped></style>