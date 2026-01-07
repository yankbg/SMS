import smsLgo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";
import React from "react";
import "../pages/style.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={smsLgo}  className="nav-logo-pic" alt="SMS Logo"/>
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><Link to="/">Accueil</Link></li>
                <li className="nav-item"><Link to="/a-propos">À propos</Link></li>
                <li className="nav-item"><Link to="/service">Nos service</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>

            </ul>
        </div>
    );
}