<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const commits = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('https://api.github.com/repos/KennLDN/proofr/commits?per_page=10');
                if (response.ok) {
                    commits.value = await response.json();
                } else {
                    console.error('Failed to fetch commits:', response.statusText);
                }
            } catch (err) {
                console.error('Error fetching commits:', err);
            }
        });

        const formatDateTime = (dateStr) => {
            const date = new Date(dateStr);

            // Format the date
            const formattedDate = new Intl.DateTimeFormat().format(date);

            // Format the time without seconds
            const formattedTime = new Intl.DateTimeFormat(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).format(date);

            return `${formattedDate} ${formattedTime}`;
        };

        return {
            commits,
            formatDateTime
        };
    }
};
</script>

<template>
    <div class="relative max-w-[640px]">
        <div class="relative flex flex-col gap-2 p-4 w-full bg-base-200 h-min">
            <h2 class="text-xl">Welcome to proofr</h2>
            <div class="divider m-0"></div>
            <p class="text-base-content">
                proofr is a tool for people to improve their proofreading ability.
                Customize the settings to create the environment that you want to learn in, hit start
                and try to get the best score you can.
            </p>
            <p class="text-base-content">
                There are many options to choose from, such as the goal options. If you set the goal
                to locate then the goal of the game becomes to simply locate each error, and be told
                whether it's right or wrong. If the goal is set to repair, the goal becomes to fix each
                error you find to its correct form.
            </p>
            <p class="text-error">
                This game is in alpha, please expect bugs and missing features!
            </p>
        </div>
        <div class="relative flex flex-col gap-2 p-4 w-full bg-base-200 h-min mt-4">
            <h2 class="text-lg">Latest Commits</h2>
            <div class="divider m-0"></div>
            <ul>
                <li v-for="commit in commits" :key="commit.sha">
                    <a :href="commit.html_url" target="_blank" rel="noopener noreferrer">
                        {{ commit.commit.message }}
                    </a>
                    <small class="block text-neutral">
                        {{ formatDateTime(commit.commit.committer.date) }}
                    </small>
                </li>
            </ul>
        </div>
    </div>
</template>
