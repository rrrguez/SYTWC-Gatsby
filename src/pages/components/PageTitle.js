import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

// Encabezado de las páginas
const PageTitle = ({page}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }`
    );

    if (page === "home") return <h1> {data.site.siteMetadata.title} </h1>

    return <Link className='home-link' to="/"> {data.site.siteMetadata.title} </Link>
}

export default PageTitle;