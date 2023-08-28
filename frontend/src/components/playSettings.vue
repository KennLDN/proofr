<script setup>
</script>

<template>
        <div class="relative flex flex-col gap-2 p-4 w-full bg-base-200 h-min">
            <h2 class="text-lg">Choose Settings</h2>
            <div class="divider m-0"></div>
            <div>
                <span class="block mb-2 font-semibold">Goal Mode</span>
                <div class="flex gap-4">
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="goalMode" value="locate" class="radio radio-xs radio-secondary" checked>
                        Locate
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="goalMode" value="repair" class="radio radio-xs radio-secondary">
                        Repair
                    </label>
                </div>
            </div>
            <div>
                <span class="block mb-2 font-semibold">Test Length</span>
                <div class="flex gap-4">
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="testLength" value="short" class="radio radio-xs radio-secondary">
                        Short
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="testLength" value="medium" class="radio radio-xs radio-secondary" checked>
                        Medium
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="testLength" value="long" class="radio radio-xs radio-secondary">
                        Long
                    </label>
                </div>
            </div>
            <div>
                <span class="block mb-2 font-semibold">Difficulty (time limit)</span>
                <div class="flex gap-4">
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="difficulty" value="easy" class="radio radio-xs radio-secondary">
                        Easy [10m]
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="difficulty" value="medium" class="radio radio-xs radio-secondary" checked>
                        Medium [5m]
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="radio" name="difficulty" value="expert" class="radio radio-xs radio-secondary">
                        Expert [1m]
                    </label>
                </div>
            </div>
            <div>
                <span class="block mb-2 font-semibold">Mistakes</span>
                <div class="flex gap-4">
                    <label class="flex gap-2 items-center">
                        <input type="checkbox" name="mistakes" value="spelling" class="checkbox checkbox-xs checkbox-secondary" checked>
                        Spelling Mistakes
                    </label>
                    <label class="flex gap-2 items-center">
                        <input type="checkbox" name="mistakes" value="grammar" class="checkbox checkbox-xs checkbox-secondary" checked>
                        Grammar Mistakes
                    </label>
                </div>
            </div>
            <div class="bg-secondary text-secondary-content font-bold mt-2 font-mono p-2 text-center">Start</div>
        </div>
</template>