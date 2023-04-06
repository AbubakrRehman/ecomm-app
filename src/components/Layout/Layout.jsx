import React from 'react'
import Header from '../Header/Header';
import classes from "./Layout.module.css";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>


    )
}

export default Layout