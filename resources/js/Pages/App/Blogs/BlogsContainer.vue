<template>
    <div class="relative">
        <Blog :image="blog1.image" class="z-20">
            <template v-slot:title>
                Our Process: <span class="gradient-text z-20">From Idea to Launch</span>
            </template>
            <template v-slot:description>
                <p class="z-20">

                    Wondering how your <span class="text-app-primary-glow">vision</span> turns into working
                    software? <br />We
                    follow a refined process that starts with
                    <span class="text-app-secondary-600 ">understanding your goals</span>, <span
                        class="text-app-primary-glow">followed by clean
                        design</span>,
                    <span class="gradient-text2">development, testing, and
                        final launch</span> — all with
                    constant collaboration. Discover how we bring ideas to life.
                </p>
            </template>
        </Blog>

        <Spacer />
        <!-- <Blog :reverse="true" /> -->


        <div class="">

            <GlowingCircle class="absolute left-[-400px] top-[150px] animate-float " :opacity="0.25" />
            <GlowingCircle class="absolute left-[25%] top-[15%] animate-float-reverse" :opacity="1"
                :color="ColorEnum.Blue" />
            <GlowingCircle class="absolute left-[900px] top-[250px] animate-float " :opacity="0.25" />
        </div>

    </div>
</template>

<script setup lang="ts">
import Spacer from '@/Components/Spacer.vue';
import Blog from './Blog.vue';
import ColorEnum from '@/enums/ColorEnum';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';
import blogImage from "@/assets/img/blogs/our-process.png";



const blog1 = {
    image: blogImage,


}

</script>