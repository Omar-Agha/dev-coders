<template>
    <div
        class="text-white grid md:grid-cols-2 sm:grid-cols-1 justify-center align-cent  border-app-primary-700 border-2 py-16 px-10 rounded-md gap-7 z-20">
        <div :class="{ 'order-2': props.reverse }" class="md:mx-auto rounded-lg overflow-hidden shadow-lg">
            <img :src="props.image" alt="blog image" class="w-full">
        </div>
        <div class="flex items-center justify-center ">
            <div class="z-20">

                <h3 class="font-bold text-4xl mb-2 ">
                    <slot name="title" />
                </h3>

                <p class="text-xl/10 ">
                    <slot name="description" />

                </p>
            </div>
        </div>
    </div>

</template>
<script setup>



const props = defineProps({
    reverse: {
        type: Boolean,
        default: false
    },

    image: String,



});
</script>


<style scoped>
/* .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-l from-app-secondary-glow to-app-primary-700;
 
} */
</style>
