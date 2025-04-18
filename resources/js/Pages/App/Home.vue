<script setup lang="ts">
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
import OurServices from './OurServices.vue';
import OurValues from './OurValues.vue';
import WhatsAppFloatingButton from '@/Components/WhatsAppFloatingButton.vue';



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
    <WhatsAppFloatingButton />

    <!-- <vue-whatsapp phoneNumber="+1111111111" /> -->
    <div class="bg-app-primary-dark min-h-screen">
        <main class=" ">
            <AppHeaderNav class="h-[15vh]" />

            <div class="container mx-auto">

                <Hero class="min-h-[85vh]" id="hero-section" />
                <Spacer />
                <OurValues />
                <Spacer :size="SpacerSize.X2" />

                <OurServices id="our-services-section" />
                <Spacer :size="SpacerSize.X2" />
                <OurProject id="our-projects-section" />
                <Spacer :size="SpacerSize.X2" />
                <BlogsContainer />
                <Spacer :size="SpacerSize.X2" />
                <ContactUs id="contact-us-section" />
            </div>
        </main>



    </div>
</template>

<style scoped></style>
