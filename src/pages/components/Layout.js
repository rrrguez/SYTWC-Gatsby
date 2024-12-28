import React from 'react';
import { Link } from 'gatsby';

const Layout = ({children, section_title}) => {
    return (
        <div>
            <header>
                <div className="title">
                    <Link className='home-link' to="/"> NINTOPIC </Link>
                </div>
                <nav>
                    <Link className='nav-link' to="../animal-crossing"> Animal Crossing </Link>
                    <Link className='nav-link' to="../mario"> Mario </Link>
                    <Link className='nav-link' to="../zelda"> The Legend of Zelda </Link>
                </nav>
                <div className='section-header'>
                    <h2 className='section-title'>{section_title}</h2>
                    <select className='sorter' id='news-sorter'>
                        <option value="publishedAt"> Most recent </option>
                        <option value="popularity"> Popularity </option>
                        <option value="relevancy" selected> Relevancy </option>
                    </select>

                </div>
            </header>
            <div className='body' id='news-container'>{children}</div>
            <footer>© 2024 NINTOPIC - Rebeca R. R. </footer>
        </div>
    )
}

export default Layout;