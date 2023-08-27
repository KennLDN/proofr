const fetchArticle = require('../functions/fetchArticle');

exports.run = async (req, res) => {
    try {
        const length = req.query.length || "medium"; 
        const content = await fetchArticle(length);
        res.json({ message: 'Success', data: content });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching article', error: error.message });
    }
};