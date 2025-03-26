<template>
    <section class="relative z-50">

        <h2 class="text-white font-bold text-7xl text-center mb">
            <span class="capitalize">Contact</span>
            <span class="capitalize text-app-primary-700">U</span>
            <span class="capitalize text-app-secondary-600">S</span>
        </h2>

        <div class="flex flex-col gap-3 w-full md:w-[50%] m-auto">
            <div class="p-[2px] z-20">
                <input type="text" name="name" class="w-full text-white input-transparent-with-border text-center z-20"
                    placeholder="Enter Your Name" />
            </div>
            <div class="p-[2px] z-20">
                <input type="email" name="email" class="w-full text-white input-transparent-with-border text-center"
                    placeholder="Enter Your Email" />
            </div>
            <div class="p-[2px] z-20">
                <textarea type="text" name="name" class="w-full text-white input-transparent-with-border text-center"
                    placeholder="Enter Your Message" rows="10" />
            </div>

            <div class="z-20">
                <button
                    class="flex justify-center w-full text-center  items-center px-4 py-2 bg-gradient-to-r from-app-primary-700 to-app-secondary-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition ease-in-out duration-150">submit</button>
            </div>
        </div>

        <div class="">


            <GlowingCircle class="absolute left-[-200px] top-[-60px] animate-float " opacity="0.15" />
            <GlowingCircle class="absolute left-[25%] top-[10%] animate-float-reverse hidden md:block" opacity="0.4"
                :color="ColorEnum.Blue" />

            <!-- for mobile screens -->
            <GlowingCircle class="absolute top-[150px] left-[-50px] animate-float-reverse block md:hidden" opacity="0.6"
                :color="ColorEnum.Blue" />

            <!-- for large screens -->
            <GlowingCircle class="absolute right-[-200px] top-[-60px] animate-float hidden md:block" opacity="0.15" />

            <PhoneIcon class="absolute md:left-[30px] md:top-[120px] md:w-auto w-10 left-[20px] top-[200px]" />
            <CSharpIcon class="absolute left-[120px] top-[10px] hidden md:block" />
            <CupIcon class="absolute md:top-[60px] md:right-[100px] w-10  md:w-auto right-[20px] top-[230px]" />
            <PhpIcon class="absolute top-[60px] right-[0px] hidden md:block" />
            <CppIcon class="absolute bottom-[60px] right-[200px] hidden md:block" />

        </div>


    </section>

</template>
<script setup>
import CppIcon from '@/assets/icons/Computer/CppIcon.vue';
import CSharpIcon from '@/assets/icons/Computer/CSharpIcon.vue';
import CupIcon from '@/assets/icons/Computer/CupIcon.vue';
import PhoneIcon from '@/assets/icons/Computer/PhoneIcon.vue';
import PhpIcon from '@/assets/icons/Computer/PhpIcon.vue';
import ProgrammingLanguagesIcon from '@/assets/icons/Computer/ProgrammingLanguagesIcon.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import GlowingCircle from '@/Components/Shapes/GlowingCircle.vue';
import ColorEnum from '@/enums/ColorEnum';


</script>


<style scoped>
.input-transparent-with-border {
    border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;
    /* border-radius: 50px; */
    border-width: 2px;
    border-style: solid;
    padding: 5px;
    background-color: transparent;
}
</style>
