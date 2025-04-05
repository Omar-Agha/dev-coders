<template>
   <!-- f4f1e0 -->
   <!-- <div class="bg-[#d7d7d7] rounded-lg px-7 py-6 shadow-xl shadow-app-secondary-600/35 shadow-"> -->
   <div class="group bg-[#f4f1e0] rounded-lg px-7 py-6 shadow-[0_10px_20px_#5aa1bf]">


      <VIcon :icon="props.icon" size="x-large"
         class=" group-hover:animate-bounce transition-all mb-4 bg-gradient-to-l from-app-secondary-glow to-app-primary-700 text-transparent bg-clip-text " />


      <p class="text-lg">{{ props.title }}</p>
      <p class="text-sm text-[#6e7375]">{{ props.content }}</p>
   </div>

</template>
<script setup>
import GradientLine from '@/Components/GradientLine.vue';
import { L } from '@/utils/translation';
import { VIcon } from 'vuetify/lib/components/index.mjs';
import { string } from 'yup';

const props = defineProps({
   icon: String,
   title: String,
   content: String


});


</script>
