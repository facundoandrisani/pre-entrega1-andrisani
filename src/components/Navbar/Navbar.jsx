import React from "react";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <section className="navBarStyle">
            <nav class="navbar navbar-expand-lg text-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">FAcommerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link text-white" href="#">Ofertas</a>
                            <a class="nav-link text-white" href="#">Verano</a>
                            <a class="nav-link text-white" href="#">Invierno</a>
                            <a class="nav-link text-white" href="#">Contacto</a>
                        </div>
                    </div>
                </div>
                <CartWidget></CartWidget>
            </nav>
        </section>
        
    )
}
