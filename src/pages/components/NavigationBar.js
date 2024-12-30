import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

// Esta función es para que se muestre el nombre de las páginas en bonito a partir de su enlace
const formatTitle = (path) => {
    const name = path.replaceAll("/news/", "").replaceAll("-", " ").replaceAll("/", "");
    return name.toUpperCase();
}

// Esta es la barra de navegación que lleva a las diferentes páginas de noticias
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