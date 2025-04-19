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
        ProjectDescription: L("BreelandoProjectDescription"),
        Image: brelandoPoster,
        SiteUrl: "",
        googlPlayUrl: "https://play.google.com/store/apps/details?id=com.breelando.breelando&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/sa/app/breelando/id6670703145",
        githubUrl: ""
    },
    {
        ProjectName: "Educar",
        ProjectDescription: L("EducarProjectDescription"),
        Image: educarPoster,
        SiteUrl: "",
        googlPlayUrl: "",
        appStoreUrl: "",
        githubUrl: ""

    },
    {
        ProjectName: "ChatZone",
        ProjectDescription: L("ChatZoneProjectDescription"),
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
            <span class="capitalize text-app-primary-700">{{ L("OurProjects1") }}</span>
            <span class="capitalize text-app-secondary-600">{{ L("OurProjects2") }}</span>
        </h2>


        <div
            class="projects-container flex justify-start gap-5 mt-3 overflow-x-scroll lg:overflow-hidden flex-nowrap lg:grid lg:grid-cols-3  overflow-y-hidden">
            <div v-for="project in projects" class="rounded-2xl ">
                <Project :app-store-url="project.appStoreUrl" :google-play-url="project.googlPlayUrl"
                    :image="project.Image" :project-name="project.ProjectName"
                    :project-description="project.ProjectDescription" class="project z-20 w-96 lg:w-[90%]"
                    :github-url="project.githubUrl" />
                <!-- w-80 xlg:w-96 -->
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