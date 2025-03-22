<script lang="ts" setup>

const props = defineProps({
    rotatedToRight: Boolean,
    rotatedToLeft: Boolean,
    shiftedToDown: Boolean,

});
</script>

<template>
    <!--  -->
    <!-- :class="{ 'rotate-[5deg]': rotatedToRight, '-rotate-[4deg]': rotatedToLeft, 'translate-y-10': shiftedToDown }" -->
    <div class="gpt-card flex flex-col relative p-7 hover:rotate-0"
        :class="{ 'rotate-[2deg] md:rotate-[5deg]': rotatedToRight, '-rotate-[1deg] md:-rotate-[4deg]': rotatedToLeft, 'md:translate-y-10 translate-y-4': shiftedToDown }">

        <div class="flex-1"></div>
        <div class="text-start">

            <h2 class="text-2xl pb-2">
                <slot name="title" />
            </h2>
            <p class="pl-0">
                <slot name="content" />
            </p>
        </div>


        <div class=" absolute right-[-80px] top-[-50px]">
            <slot name="icon" />

        </div>




    </div>



</template>

<style scoped>
.gpt-card {
    /* width: 200px; */
    height: 300px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5),
        inset 0 0 16px rgba(255, 255, 255, 0.1);

    background: rgba(255, 255, 255, 0.05);
    /* subtle white tint */
    backdrop-filter: blur(15px);
    /* frosted glass */
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;

    text-align: center;
    color: white;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}


.gpt-card:hover {
    box-shadow: 0 0 30px rgba(164, 116, 255, 0.6),
        inset 0 0 16px rgba(255, 255, 255, 0.1);
    /* Glowing purple (adjust if needed) */

    /* transform: translateY(-10px); */
    z-index: 100;
    /* slight lift */
}

.gpt-card::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent);
    transform: rotate(30deg);
    transition: opacity 0.3s ease;
    opacity: 0;
}

.gpt-card:hover::before {
    opacity: 1;
}

.gpt-card h3 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: bold;
}

.gpt-card p {
    font-size: 14px;
    opacity: 0.7;
    padding: 0 10px;
}
</style>
