<template>

    <section class="our-values text-white relative  ">
        <h2 class="text-white font-bold text-7xl text-center mb">


            <span class="capitalize text-app-secondary-600">{{ L("OurValues1") }}</span>
            <span class="capitalize text-app-primary-700">{{ L("OurValues2") }}</span>
        </h2>
        <p class="text-center my-4 text-lg">{{ L("OurValuesSubheading") }}</p>


        <!-- <div class="grid  grid-cols-4 gap-1 mt-2 z-20 py-5"> -->
        <div class="grid  grid-cols-1 gap-7 md:grid-cols-2 md:gap-5  lg:grid-cols-4 lg:gap-2  mt-2 z-20 py-5">

            <GlassyCard class="z-20" rotated-to-left shifted-to-down>
                <template v-slot:title>{{ L("OurMission") }}</template>
                <template v-slot:content>{{ L("OurMissionDescription") }}</template>
                <template v-slot:icon>
                    <TargetIcon />
                </template>
            </GlassyCard>
            <GlassyCard class="z-20" rotated-to-right>
                <template v-slot:title>{{ L("OurValues") }}</template>
                <template v-slot:content>{{ L("OurValuesDescription") }}</template>
                <template v-slot:icon>
                    <HeartIcon />
                </template>
            </GlassyCard>
            <GlassyCard class="z-20" rotated-to-left shifted-to-down>
                <template v-slot:title>{{ L("QualityFirst") }}</template>
                <template v-slot:content>{{ L("QualityFirstDescription") }}</template>
                <template v-slot:icon>
                    <CheckCircleIcon />
                </template>
            </GlassyCard>

            <GlassyCard class="z-20" rotated-to-right>
                <template v-slot:title>{{ L("InnovationAndCuriosity") }}</template>
                <template v-slot:content>{{ L("InnovationAndCuriosityDescription") }}</template>
                <template v-slot:icon>
                    <ZapIcon />
                </template>
            </GlassyCard>



        </div>

        <div class="">

            <GlowingCircle class="absolute left-[-400px] top-[0px] animate-float " :opacity="0.25" />
            <GlowingCircle class="absolute left-[25%] top-[10%] animate-float-reverse" :opacity="1"
                :color="ColorEnum.Blue" />

            <GlowingCircle class="absolute left-[900px] top-[-150px] animate-float " :opacity="0.25" />

            <!-- for mobile -->
            <GlowingCircle class="block sm:md absolute right-[80px] top-[60%] animate-float " :opacity="0.25" />
        </div>



    </section>

</template>
<script setup lang="ts">

import GradientLine from '@/Components/GradientLine.vue';
import GlassyCard from '@/Components/Cards/GlassyCard.vue';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';
import ColorEnum from '@/enums/ColorEnum';

import { L } from '@/utils/translation';
import gsap from 'gsap';
import SunIcon from '@/assets/icons/SunIcon.vue';
import TargetIcon from '@/assets/icons/TargetIcon.vue';
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon.vue';
import ZapIcon from '@/assets/icons/ZapIcon.vue';



gsap.from(".glass-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

</script>


<style scoped>
.glass-card {
    /* @apply bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 cursor-default; */
    /* @apply isolate rounded-xl bg-transparent shadow-lg ring-1 border-red-400 */
    /* @apply bg-indigo-200 p-3 isolate aspect-video  rounded-xl  shadow-lg ring-1 ring-black/35 backdrop-blur-md */
    padding: 20px;
    /* From https://css.glass */
    /* From https://css.glass */
    height: 200px;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.31);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

}

.drop-shadow {
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1));
    /* Adjust opacity if needed */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* Important because of the `:before` positioning */
}

.drop-shadow::before {
    display: block;
    content: "";
    position: absolute;
    top: 10em;
    height: calc(100% - 20em);
    width: calc(100% - 20em);
    border-top: 2px solid rgba(225, 225, 225, 0.2);
    border-left: 1px solid rgba(225, 225, 225, 0.1);
    border-right: 1px solid rgba(225, 225, 225, 0.3);
    z-index: 2;
    /* filter: blur(1px); */
    /* Uncomment if you actually want the blur */
}


.glass {
    height: 100%;
    width: 100%;
    background-image: url($image);
    background-size: cover;
    background-position: center;
    clip-path: inset(10em);
    filter: blur(20%);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
