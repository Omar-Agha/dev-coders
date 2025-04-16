<template>
    <div class="relative">
        <Blog :image="blog1.image" class="z-20">


            <template v-slot:title>
                {{ $t('OurProcessTitle') }}
                <span class="gradient-text z-20">{{ $t('FromIdeaToLaunch') }}</span>
            </template>

            <template v-slot:description>
                <p class="z-20">
                    <span
                        v-html="$t('VisionToSoftware', { vision: `<span class='text-app-primary-glow'>${$t('Vision')}</span>` })">
                    </span>

                    <br />
                    {{ $t('WeFollow') }}
                    <span class="text-app-secondary-600">{{ $t('Step1') }}</span>،
                    <span class="text-app-primary-glow">{{ $t('Step2') }}</span>،
                    <span class="gradient-text2">{{ $t('Step3') }}</span> —
                    {{ $t('Closing') }}
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