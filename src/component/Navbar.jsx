import smsLgo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../pages/style.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);  // ✅ État hamburger
    const [scrolled, setScrolled] = useState(false);  // ✅ Effet scroll
    // ✅ Fermer menu au scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            if (window.scrollY > 50) setIsOpen(false);  // Ferme menu mobile
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                <img src={smsLgo}  className="nav-logo-pic" alt="SMS Logo"/>
            </div>
            <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
                <li className="nav-item"><Link to="/"  onClick={() => setIsOpen(false)}>Accueil</Link></li>
                <li className="nav-item"><Link to="/a-propos"  onClick={() => setIsOpen(false)}>À propos</Link></li>
                <li className="nav-item"><Link to="/service"  onClick={() => setIsOpen(false)}>Nos service</Link></li>
                <li className="nav-item"><Link to="/contact"  onClick={() => setIsOpen(false)}>Contact</Link></li>

            </ul>
            {/* Hamburger Mobile */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={`bar ${isOpen ? 'bar-1' : ''}`}></span>
                <span className={`bar ${isOpen ? 'bar-2' : ''}`}></span>
                <span className={`bar ${isOpen ? 'bar-3' : ''}`}></span>
            </div>
        </div>
    );
}