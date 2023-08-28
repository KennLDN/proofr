<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container = ref(null);
const containerWidth = ref(0);

const computedFontSize = (percentage) => {
    if (!container.value) return '';
    const fontSize = Math.min(containerWidth.value * percentage, containerWidth.value * percentage * (795 / 100));
    return `font-size: ${fontSize}px`;
};

onMounted(() => {
    containerWidth.value = container.value.offsetWidth;

    const resizeObserver = new ResizeObserver(() => {
        containerWidth.value = container.value.offsetWidth;
    });

    resizeObserver.observe(container.value);

    onBeforeUnmount(() => {
        resizeObserver.disconnect();
    });
});
</script>

<template>
    <div class="touch-pan-y relative space-y-4 w-[100%] pb-[52px] xl:pb-0 max-w-[795px]" ref="container">
        <div class="relative w-full pb-[141%] border border-opacity-20 border-2 border-neutral bg-base-200">
            <div class="absolute top-4 bottom-4 left-4 right-4">
                <h1 :style="computedFontSize(0.034)">Test</h1>
                <div class="divider mt-1 mb-2"></div>
                <p :style="computedFontSize(0.022)">Your content here</p>
            </div>
        </div>
        <div class="relative w-full pb-[141%] border border-opacity-20 border-2 border-neutral bg-base-200">
            <div class="absolute top-4 bottom-4 left-4 right-4">
                <h1 :style="computedFontSize(0.034)">Test</h1>
                <div class="divider mt-1 mb-2"></div>
                <p :style="computedFontSize(0.022)">Your content here</p>
            </div>
        </div>
    </div>
</template>
    
<style scoped>
</style>
    