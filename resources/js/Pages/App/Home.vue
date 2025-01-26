<script setup>
import AppHeaderNav from '@/Layouts/App/AppHeaderNav.vue';
import Hero from './Hero.vue';
import AboutUs from './AboutUs.vue';
// import Spacer from '@/Components/Spacer.vue';
import KnowUs from './KnowUs.vue';
import OurProject from './OurProject.vue';
import SpacerSize from '@/enums/SpacerSize';
import Blogs from './Blogs/Blog.vue';
import BlogsContainer from './Blogs/BlogsContainer.vue';
import ContactUs from './ContactUs.vue';
import Spacer from '@/Components/Spacer.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <div class="bg-app-primary-dark min-h-screen">
        <main class="container mx-auto">
            <AppHeaderNav class="h-[15vh]" />
            <Hero class="min-h-[85vh]" />
            <Spacer />
            <AboutUs />
            <Spacer :size="SpacerSize.X2" />
            <KnowUs />

            <Spacer :size="SpacerSize.X2" />
            <OurProject />
            <Spacer :size="SpacerSize.X2" />
            <BlogsContainer />
            <Spacer :size="SpacerSize.X2" />
            <ContactUs />
            
        </main>



    </div>
</template>

<style></style>
