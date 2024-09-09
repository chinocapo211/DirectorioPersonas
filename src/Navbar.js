import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Estadisticas">Estadísticas</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
