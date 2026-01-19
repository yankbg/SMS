import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import './style.css';

const ContactCard = ({icon, title, detail1, detail2}) => (
    <div className="contact-card p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-3 transition-all duration-500 border border-gray-200/50 group" data-aos="fade-up" data-aos-delay="0">
        <div className="contact-icon w-20 h-20 card-svg-services text-3xl flex items-center justify-center rounded-3xl mb-6 shadow-2xl mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all">
            <span>{icon}</span>
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 text-center group-hover:text-orange-700 transition-colors">{title}</h3>
        <div className="space-y-2 text-center">
            <p className="text-lg font-semibold text-gray-800">{detail1}</p>
            <p className="text-gray-600">{detail2}</p>

        </div>
    </div>
);

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(serviceId, templateId, formData, publicKey)
            .then(() => {
                setStatus('Message envoyé avec succès !');
                // Reset...
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            })
            .catch(() => setStatus('Erreur envoi. Réessayez.'));
    };



    return (
        <>
            <Navbar />
            <div className="main-contact min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-emerald-50">
                {/* Hero Contact */}
                <section className="hero-section-contact pt-32 pb-24 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.2),transparent_50%)]"></div>
                    <div className="hero-div-contact container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white to-orange-100 bg-clip-text mb-6" data-aos="zoom-in" data-aos-delay="0">
                                Contact SMS SARL - Architecture, Génie Civil et Logistique RDC
                            </h1>
                            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="0">
                                Votre projet mérite <span className="font-bold bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 bg-clip-text text-transparent">l'excellence SMS SARL</span>
                            </p>
                            <div className="hero-bottom-contact flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="100">
                                <a href="tel:+243990410752" className="bg-white/20 backdrop-blur-sm  px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 transition-all duration-300">
                                    📞 +243 990 410 752
                                </a>
                                <a href="mailto:sms.sarl33@gmail.com" className="bg-emerald-500/20 backdrop-blur-sm text-white px-12 py-5 rounded-3xl font-bold text-xl border-2 border-white/30 hover:bg-white hover:text-orange-600 transition-all duration-300">
                                    ✉️ Envoyer un email
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coordonnées */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                            <ContactCard
                                icon="📍"
                                title="Adresse Goma"
                                detail1="Av. Bobila Dawa n°52"
                                detail2="Q. Kyeshero, Commune de Goma, Nord-Kivu, RDC"
                            />
                            <ContactCard
                                icon="🏢"
                                title="Adresse Kinshasa"
                                detail1="Boulevard du 30 Juin"
                                detail2="Maison Kavali Centre, B31-10"

                            />
                            <ContactCard
                                icon="📧"
                                title="Contact Direct"
                                detail1="sms.sarl33@gmail.com"
                                detail2="+243 990 410 752"

                            />
                        </div>

                        {/* Horaires */}
                        <div className="horaire-contact text-center mb-24">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8" data-aos="zoom-in" data-aos-delay="0">Horaires d'ouverture</h3>
                            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl" data-aos="fade-up" data-aos-delay="0">
                                    <h4 className="font-bold text-2xl mb-4">Goma</h4>
                                    <p className="text-lg mb-2">Lundi-Vendredi: 08h-18h</p>
                                    <p>Samedi: 10h-16h</p>
                                </div>
                                <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl" data-aos="fade-up" data-aos-delay="0">
                                    <h4 className="font-bold text-2xl mb-4">Kinshasa</h4>
                                    <p className="text-lg mb-2">Lundi-Vendredi: 08h-17h</p>
                                    <p>Samedi: 09h-13h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Formulaire Contact */}
                <section className="formulaire-section-contact py-24 bg-gradient-to-br from-orange-50 to-emerald-50">
                    <div className="container mx-auto px-6  flex justify-center">
                        <div className="max-w-4xl mx-auto ">
                            <div className="grid lg:grid-cols-2 gap-12 items-start justify-center ">
                                {/* Formulaire */}
                                <div className="formulaire-title space-y-6">
                                    <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight" data-aos="zoom-in" data-aos-delay="0">
                                        Demandez votre <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">devis gratuit</span>
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="0">
                                        Remplissez le formulaire - Réponse sous 24h
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="0">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom Complet *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="input-contact w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-lg"
                                                placeholder="Votre nom"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="input-contact w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="input-contact w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all"
                                                    placeholder="+243 ..."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Service souhaité</label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="select-contact w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all text-lg"
                                            >
                                                <option value="">Sélectionnez un service</option>
                                                <option value="genie-civil">Génie Civil / Travaux Publics</option>
                                                <option value="logistique">Import-Export / Logistique</option>
                                                <option value="immobilier">Promotion Immobilière</option>
                                                <option value="engins">Véhicules & Engins</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="textarea-contact w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:outline-none transition-all resize-vertical"
                                                placeholder="Dites-nous en plus sur votre projet..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full envoyezbtn text-white py-5 px-8 rounded-3xl font-black text-xl shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                                        >
                                            Envoyer le message
                                        </button>
                                    </form>

                                    {status && (
                                        <div className={`p-6 rounded-3xl text-center font-bold text-xl ${status.includes('envoyé') ? 'bg-emerald-100 border-2 border-emerald-400 text-emerald-800' : 'bg-orange-100 border-2 border-orange-400 text-orange-800'}`}>
                                            {status}
                                        </div>
                                    )}
                                </div>

                                {/* Carte Info */}
                                <div className=" lg:sticky lg:top-24 space-y-8" data-aos="fade-up" data-aos-delay="0">
                                    <div className="carte-info-contact bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-10 rounded-4xl border-2 border-orange-200/50 shadow-2xl">
                                        <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">Devis en 24h</h3>
                                        <div className="space-y-4 text-center">
                                            <div className="text-4xl mb-4">⚡</div>
                                            <p className="carte-info-p text-xl font-semibold text-gray-800">Réponse garantie sous 24h</p>
                                            <div className="grid grid-cols-1 gap-4 mt-8 text-sm">
                                                <div className="p-4 bg-white/50 rounded-xl">
                                                    <div className="font-bold text-orange-600">📞</div>
                                                    <div>+243 990 410 752</div>
                                                </div>
                                                <div className="p-4 bg-white/50 rounded-xl">
                                                    <div className="font-bold text-emerald-600">✉️</div>
                                                    <div>sms.sarl33@gmail.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
