//import React, { Component } from 'react'
import { Link , Outlet } from 'react-router-dom'
import styles from "../Navbar.module.css";
const Links = ()=>{
    return(
    <>
    <nav >
        <ul className={styles.navlist}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Tv shows</Link>
            </li>
            <li>
                <Link to="/">Movies</Link>
            </li>
            <li>
                <Link to="/">Popular</Link>
            </li>
            <li>
                <Link to="/">My list</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>)
};
export default Links;
