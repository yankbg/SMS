import React from "react";
import "../pages/style.css";
import smsLgo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={smsLgo} className="nav-logo-pic" alt="SMS Logo"/>
                        <h3>SMS SARL</h3>
                        <p>
                            Societe Multi Services -Votre partenaire de confiance pour tous vos projets.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li>Travaux Publics</li>
                            <li>Genie Civil</li>
                            <li>Import-Export</li>
                            <li>Immobilier</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>Email: contact@sms-sarl.com</p>
                        <p>Telephone: A votre service</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>yaan kbg &copy; 2024 SMS SARL. Tous droits reserves.</p>
                </div>
            </div>
        </footer>
    );
}