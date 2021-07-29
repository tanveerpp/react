import React from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>{
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <NavLink to="/" className="navbar-brand">Eshoppingg</NavLink>
  <ul class="navbar-nav">
    <li class="nav-item">
        <NavLink to="/" className="nav-link">Home</NavLink>
    </li>
    <li class="nav-item">
        <NavLink to="about" className="nav-link">About</NavLink>
    </li>
    <li class="nav-item">
        <NavLink to="contact" className="nav-link">Contact</NavLink>
    </li>
    <li class="nav-item">
        <NavLink to="products" className="nav-link">Products</NavLink>
    </li>
    <li class="nav-item">
    <NavLink to="admin" className="nav-link">admin</NavLink>
    </li>
  </ul>
</nav>

        </>
    )
}
export default Header;