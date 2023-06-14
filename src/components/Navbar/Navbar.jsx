import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    return (
        <section className='navBarColour'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link to ='/' class="navbar-brand">FAcommerce</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink as={Link} to='/description/hombre' className={({ isActive}) => isActive ? 'ActiveOption navBarSection' : 'Option navBarSection'}>Hombre</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink as={Link} to='/description/mujer' className={({ isActive}) => isActive ? 'ActiveOption navBarSection' : 'Option navBarSection'}>Mujer</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </section>
    )
}
