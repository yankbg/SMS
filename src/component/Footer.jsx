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
                        <h3 data-aos="zoom-in" data-aos-delay="0">SMS SARL</h3>
                        <p data-aos="fade-up" data-aos-delay="0">
                            Societe Multi Services -Votre partenaire de confiance pour tous vos projets.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 data-aos="zoom-in" data-aos-delay="0">Services</h3>
                        <ul data-aos="fade-up" data-aos-delay="0">
                            <li>Travaux Publics</li>
                            <li>Genie Civil</li>
                            <li>Import-Export</li>
                            <li>Immobilier</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 data-aos="zoom-in" data-aos-delay="0">Contact</h3>
                        <p data-aos="fade-up" data-aos-delay="0">Email: sms.sarl33@gmail.com</p>
                        <p data-aos="fade-up" data-aos-delay="0">Telephone: +243 990 410 752</p>
                    </div>
                </div>
                <div className="footer-bottom flex justify-center" data-aos="fade-up" data-aos-delay="0">
                    <p>yaan kbg &copy; 2024 SMS SARL. Tous droits reserves.</p>
                </div>
            </div>
        </footer>
    );
}