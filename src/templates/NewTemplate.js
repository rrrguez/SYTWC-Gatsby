import React from "react";
import Layout from '../pages/components/Layout';
import NewCard from "../pages/components/NewCard";

const NewTemplate = ({ pageContext }) => {
    const { slug, news } = pageContext;

    return (
        <Layout>
            <h1>{slug.replaceAll("-", " ").toUpperCase()}</h1>
            <div className="new-grid">
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
            </div>
        </Layout>
    )
}

export default NewTemplate;