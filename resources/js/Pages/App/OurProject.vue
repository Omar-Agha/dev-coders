<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import projectDarkImage from "@/assets/img/projects/project-dark.png";
import projectWhiteImage from "@/assets/img/projects/project-white.png";
import samaArt from "@/assets/img/projects/sama-art.png";
import brelando from "@/assets/img/projects/brelando.png";
import 'swiper/css';


import Project from '@/Components/Project.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';




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
            <span class="capitalize text-app-secondary-600">Project</span>
        </h2>


        <div
            class="projects-container flex justify-start gap-5 mt-3 overflow-x-scroll md:overflow-hidden flex-nowrap md:grid md:grid-cols-3  overflow-y-hidden">
            <div v-for="project in projects" class="rounded-2xl">
                <Project :app-store-url="project.appStoreUrl" :image="project.Image" :project-name="project.ProjectName"
                    :project-description="project.ProjectDescription" class="project"></Project>

            </div>
        </div>
    </div>



</template>


<style scoped></style>