<script setup lang="ts">
import ColorEnum from '@/enums/ColorEnum';
import { PropType } from 'vue';

const blueColor = "#55BFFB2E"
const purpleColor = "#AB55FB"
var props = defineProps({
    opacity: {
        type: [Number],
        default: 0.15
    },
    color: {
        type: Number as PropType<ColorEnum>,
        default: ColorEnum.Purple
    }
})
</script>
<template>
    <div>
        <svg width="646" height="685" viewBox="0 0 646 685" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_1056)">
                <circle cx="303.5" cy="342.5" r="195.5"
                    :fill="props.color == ColorEnum.Purple ? purpleColor : blueColor" :fill-opacity="props.opacity" />
            </g>
            <defs>
                <filter id="filter0_f_1_1056" x="-39" y="0" width="685" height="685" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="73.5" result="effect1_foregroundBlur_1_1056" />
                </filter>
            </defs>
        </svg>



    </div>
</template>