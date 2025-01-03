<template>
    <div
        class="text-white grid grid-cols-2 justify-center align-cent  border-app-primary-700 border-2 py-16 px-10 rounded-md ">
        <div :class="{ 'order-2': props.reverse }" class="mx-auto">
            <img :src="blogImage" alt="blog image">
        </div>
        <div class="flex items-center justify-center ">
            <div>
                <h3 class="font-bold text-4xl mb-2">Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus eos repellendus nesciunt,
                    harum
                    quae quisquam totam unde illo blanditiis aperiam, optio omnis vero amet adipisci odio minus ullam
                    repudiandae?</p>
            </div>
        </div>
    </div>

</template>
<script setup>
import blogImage from "@/assets/img/blogs/image.png";


const props = defineProps({
    reverse: {
        type: Boolean,
        default: false
    }
});
</script>
