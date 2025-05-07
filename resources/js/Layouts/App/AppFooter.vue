<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { translate } from '@/utils/translation';


</script>

<template>
    <!-- bg-[#262626] -->
    <div class="bg-[#262626] py-10 rounded-t-xl h-[250px]">
        <ApplicationLogo :animate="false" class="mx-auto justify-center " />
        <p class="text-sm text-gray-400 text-center mt-4">
            {{ $t("Copyright", { Date: new Date().getFullYear() }) }}
            <!-- © {{ new Date().getFullYear() }} DevCoders. All rights reserved. -->
        </p>

    </div>
</template>


<style scoped></style>
