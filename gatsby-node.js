const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allNewsArticle(filter: {title: {ne: "[Removed]"}}) {
                group(field: {topic: SELECT}) {
                fieldValue
                nodes {
                    title
                    description
                    source {
                    name
                    }
                    urlToImage
                    url
                    publishedAt
                }
                }
            }
        }
    `);

    if (result.errors) {
        throw new Error(result.errors);
    }

    console.log(result.data.allNewsArticle.group.nodes);

    result.data.allNewsArticle.group.forEach((group) => {
        createPage({
            path: `/news/${group.fieldValue}`,
            component: path.resolve(`/templates/NewTemplate.js`),
            context: {
                slug: group.fieldValue,
                news: group.nodes,
            },
        });
    });
};