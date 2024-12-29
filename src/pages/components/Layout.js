import React from 'react';
import NavigationBar from './NavigationBar';
import PageTitle from './PageTitle';

const Layout = ({children, section_title, section_name}) => {
    return (
        <div>
            <header>
                <div className="title">
                    <PageTitle/>
                </div>
                <NavigationBar/>
                <div className='section-header'>
                    <h2 className='section-title'>{section_title}</h2>
                </div>
            </header>
            <div className='news-container' id={section_name}>{children}</div>
            <footer>© 2024 NINTOPIC - Rebeca R. R. </footer>
        </div>
    )
}

export default Layout;