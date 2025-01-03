<template>

    <div :class="publishedBooksMessage"></div>


</template>

<script setup lang="ts">
import SpacerSize from '@/enums/SpacerSize';
import { computed, PropType } from 'vue';


const props = defineProps({
    size: {
        type: Number as PropType<SpacerSize>,
        default: SpacerSize.X1
    }


});

const publishedBooksMessage = computed(() => {
    switch (props.size) {
        case SpacerSize.X1:
            return "h-10";

        case SpacerSize.X2:
            return "h-20";


        default:
            break;
    }

})
</script>