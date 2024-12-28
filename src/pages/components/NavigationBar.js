import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const formatTitle = (path) => {
    const name = path.replaceAll("/news/", "").replaceAll("-", " ").replaceAll("/", "");
    return name.toUpperCase();
}

const NavigationBar = () => {
    const data = useStaticQuery(graphql`
        query {
            allSitePage(filter: { path: { regex: "/^\/news/" } } ) {
                nodes {
                    path
                }
            }
    }
    `);

    return (
        <nav>
            {data.allSitePage.nodes.map((node) => (
                <Link className="nav-link" to={node.path}>{formatTitle(node.path)}</Link>
            ))}
        </nav>
    )
}

export default NavigationBar;