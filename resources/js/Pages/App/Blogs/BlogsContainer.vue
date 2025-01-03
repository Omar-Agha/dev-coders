<template>
    <Blog />
    <Spacer />
    <Blog :reverse="true" />
</template>

<script setup>
import Spacer from '@/Components/Spacer.vue';
import Blog from './Blog.vue';

</script>