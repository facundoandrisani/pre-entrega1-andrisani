import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <section className="navBarStyle">
            <nav class="navbar navbar-expand-lg text-warning">
                <div class="container-fluid">
                    <Link to ='/' class="navbar-brand">FAcommerce</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="containerNav" class="navbar-nav">
                            <NavLink to='/category/mens%20clothing' className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hombre</NavLink>
                            <NavLink to='/category/womens%20clothing' className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mujeres</NavLink>
                            <NavLink to='/category/jewelery' className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} >Joyas</NavLink>
                            <NavLink to='/category/electronics' className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronica</NavLink>
                        </div>
                    </div>
                </div>
                <CartWidget></CartWidget>
            </nav>
        </section>
        
    )
}
