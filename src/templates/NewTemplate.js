import React from "react";
import Layout from '/pages/components/Layout';
import NewCard from "/pages/components/NewCard";
import '/pages/styles/new.css'

const NewTemplate = ({ pageContext }) => {
    const { slug, news } = pageContext;

    const h1Value = slug.replaceAll("-", " ").toUpperCase()

    function capitalizer(gameName) {
        return gameName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }

    return (
        <Layout id={slug} section_title={"News about " + capitalizer(h1Value)} section_name={slug}>
            {news.map((anew, index) => (
                <NewCard
                    key={index}
                    title={anew.title}
                    description={anew.description}
                    source={anew.source.name}
                    image={anew.urlToImage}
                    link={anew.url}
                    date={anew.publishedAt}
                />
            ))}
        </Layout>
    )
}

export default NewTemplate;