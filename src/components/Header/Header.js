import React from 'react';
import classes from "./Header.module.css"
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

function Header() {
    const cartQuantity=useSelector((state)=>state.cart.totalQuantity);

    return (
        <div className={classes}>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary ${classes.borderBottom}`} >
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Ecommerce</a> */}
                    <NavLink to="/products" className="navbar-brand">Ecommerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Home</a> */}
                                <NavLink to="/home" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Products</a> */}
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About</a> */}
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Contact</a> */}
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink to="/login" className="btn btn-outline-dark">Login</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink to="/register" className="btn btn-outline-dark">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cart" className="btn btn-outline-dark">Cart ({cartQuantity})</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header