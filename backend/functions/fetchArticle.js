const axios = require('axios');

async function fetchArticle(length = "medium") {
    const thresholds = {
        short: [0, 1000],
        medium: [1001, 3000],
        long: [3001, 5001]
    };

    let content = "";
    while (true) {
        const randomTitleResponse = await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json');
        const title = randomTitleResponse.data.query.random[0].title;

        const articleContentResponse = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=extracts&explaintext&format=json`);
        const pages = articleContentResponse.data.query.pages;
        const pageId = Object.keys(pages)[0];
        content = pages[pageId].extract;

        // Check if content length matches the desired threshold
        const [min, max] = thresholds[length];
        if (content.length >= min && content.length <= max) break;
    }

    return content;
}

module.exports = fetchArticle;
