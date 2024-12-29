const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const topics = [
        { slug: 'animal-crossing', query: 'Animal Crossing' },
        { slug: 'super-mario', query: 'Super Mario' },
        { slug: 'the-legend-of-zelda', query: 'The Legend of Zelda' },
    ];

    const apiKey = '837a31ae3332452984f7fe9642c6511d';

    for (const topic of topics) {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic.query)}&apiKey=${apiKey}`
        );
        const data = await response.json();

        data.articles.forEach((article, index) => {
            createNode({
                ...article,
                topic: topic.slug,
                id: createNodeId(`${topic.slug}-${index}`),
                internal: {
                    type: 'NewsArticle',
                    contentDigest: createContentDigest(article),
                },
            });
        });
    }
}