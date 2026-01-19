import React, { useState } from 'react';
// import React from 'react';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import './style.css'

export default function APropos() {
    const EquipmentCard = ({icon, title, desc}) => (
        <div className="equipment-card01 group flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300 border border-emerald-200/50 hover:border-emerald-300" data-aos="fade-up" data-aos-delay="0">
            <div className="icon-materiel w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center rounded-2xl text-2xl flex-shrink-0 group-hover:scale-110 transition-all shadow-lg">
                <span>{icon}</span>
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
            </div>
        </div>
    )

    const AProposContent = () => {
        const [showEngins, setShowEngins] = useState(false);
        const [showPrecision, setShowPrecision] = useState(false);
        const [showRoulant, setShowRoulant] = useState(false);
        return (
            <div className="main-apropos min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                {/* Hero À Propos */}
                <section className="section-hero pt-32 pb-24 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
                    {/*<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>*/}
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="container max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-white/80 bg-clip-text mb-6" data-aos="zoom-in" data-aos-delay="0">
                                À Propos
                            </h1>
                            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Société Multi Services <span className="font-bold bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-600 bg-clip-text text-transparent">SMS SARL</span>
                            </p>
                            <div className="subtitle-container mt-8 flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="subtitle-apropos bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold">
                                    RCCM CD/GOM/RCCM/23-B-00096
                                </div>
                                <div className="subtitle-apropos bg-emerald-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold border border-emerald-400/30">
                                    Fondée le 16 Mars 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="left-grid space-y-8">
                                <div className="mission-title inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-sm font-semibold w-fit">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                    </svg>
                                    NOTRE MISSION
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 max-w-lg leading-tight" data-aos="zoom-in" data-aos-delay="0">
                                    Contribuer à la reconstruction<br/>
                                    <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-600 bg-clip-text text-transparent">de notre cher pays</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="0">
                                    Avec un profond désir de participer à la reconstruction de la RDC, SMS SARL offre des services d'excellence
                                    dans l'architecture, génie civil, travaux publics, transport, logistique et import-export.
                                </p>
                            </div>
                            <div className="relative" data-aos="fade-up" data-aos-delay="0">
                                <div className="bg-gradient-to-br from-emerald-500/5 to-green-500/5 p-12 rounded-3xl backdrop-blur-sm border border-emerald-200/30 shadow-2xl">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all">
                                            <div className="text-4xl mb-3">🏗️</div>
                                            <h4 className="font-bold text-xl mb-2">Génie Civil</h4>
                                            <p className="text-sm text-gray-600">Bâtiments & Infrastructures</p>
                                        </div>
                                        <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all">
                                            <div className="text-4xl mb-3">🚚</div>
                                            <h4 className="font-bold text-xl mb-2">Logistique</h4>
                                            <p className="text-sm text-gray-600">Import-Export & Transport</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Équipe & Références */}
                <section className="reference-container py-24 bg-gradient-to-r from-gray-50 to-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="reference-title text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6" data-aos="zoom-in" data-aos-delay="0" id="equipe-qualifier">Nos Forces</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="0">
                                Expertise humaine et matérielle au service de vos projets
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 mb-20">
                            {/* Équipe */}
                            <div >
                                <h3 className="text-3xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-delay="0">Équipe Qualifiée</h3>
                                <div className="equipe-container space-y-6">
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="0">
                                        <div
                                            className="equipe-number w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Architectes</h4>
                                            <p className="text-gray-600">Conception innovante et esthétique</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="150">
                                        <div
                                            className="equipe-number w-12 h-12 bg-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Ingénieurs Civils</h4>
                                            <p className="text-gray-600">Expertise BTP reconnue</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="0">
                                        <div
                                            className="equipe-number w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Environmentaliste</h4>
                                            <p className="text-gray-600">Études d'impact</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="150">
                                        <div
                                            className="equipe-number w-12 h-12 bg-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Ingénieurs Géotechnicien</h4>
                                            <p className="text-gray-600">Études de sol</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="0">
                                        <div
                                            className="equipe-number w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Ingénieurs Electriciens</h4>
                                            <p className="text-gray-600">Installations électriques</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="150">
                                        <div
                                            className="equipe-number w-12 h-12 bg-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Ingénieurs Electro
                                                mécanicien</h4>
                                            <p className="text-gray-600">Maintenance équipements</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Références Admin */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">Références Officielles</h3>
                                <div className="reference-apropos space-y-4">
                                    <div data-aos="fade-up" data-aos-delay="0"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p
                                            className="font-mono text-sm  px-3 py-1">RCCM</p>
                                        <h4 className="font-bold text-lg mt-2">CD/GOM/RCCM/23-B-00096</h4>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="150"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p
                                            className="font-mono text-sm  px-3 py-1">ID Nat.</p>
                                        <h4 className="font-bold text-lg mt-2">19-F4200-N42091Z</h4>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="150"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p
                                            className="font-mono text-sm  px-3 py-1">IMPÔT</p>
                                        <h4 className="font-bold text-lg mt-2">A2403844F</h4>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="300"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p className="font-mono text-sm  px-3 py-1">Status harmonisés au droit OHADA</p>
                                        <h4 className="font-bold text-lg mt-2">Acte notarié n 050/2024 du 21/02/2024
                                        </h4>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="0"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p className="font-mono text-sm  px-3 py-1">certificat d'Agrément TPI</p>
                                        <h4 className="font-bold text-lg mt-2">N 68/EC-D/01-18/NK du 10 Octobre 2023
                                        </h4>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="150"
                                        className="reference-item bg-gradient-to-r from-blue-100 to-indigo-50 p-6 rounded-2xl border-l-4 border-color-logo">
                                        <p className="font-mono text-sm  px-3 py-1">Certificat d'affiliation a la CNSS</p>
                                        <h4 className="font-bold text-lg mt-2">N 443/8/570/B/PMEA/DIVIPRON/N-K/2023
                                        </h4>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* ÉQUIPEMENTS & MATÉRIEL */}
                        <section className="materiel-section py-24 bg-gradient-to-r from-blue-50 via-red-50 to-blue-100" id="Engins">
                            <div className="container mx-auto px-6">
                                <div className="text-center mb-20">
                                    <div className="icon-badge-Apropos inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-sm font-semibold w-fit mx-auto mb-8 shadow-lg">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                        </svg>
                                        POTENTIEL MATÉRIEL
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-500 to-gray-950 bg-clip-text text-transparent mb-6" data-aos="zoom-in" data-aos-delay="0">
                                        Nos Équipements Modernes
                                    </h2>
                                    <p className="text-xl text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="0">
                                        Matériel professionnel pour des chantiers de qualité
                                    </p>
                                </div>

                                {/* ENGINS DE CHANTIER */}
                                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                            <svg className="icon-title-card w-10 h-10 text-orange-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                                            </svg>
                                            Engins de Chantier
                                        </h3>
                                        <div className="card-materiel space-y-4">
                                            <EquipmentCard icon="🚜" title="2 Excavatrices" desc="Creusement & terrassement" />
                                            <EquipmentCard icon="🛡️" title="1 Chargeur" desc="Manutention matériaux" />
                                            <EquipmentCard icon="🚛" title="4 Camions" desc="Transport matériaux" />
                                            <EquipmentCard icon="📏" title="2 Cyclomètres" desc="Mesures topographiques" />
                                        </div>
                                        <div className="text-center">
                                            <button onClick={() => setShowEngins(!showEngins)} className="cta-projet01 toggle-btn px-8 py-4  text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
                                                {showEngins ? 'Voir moins ' : 'Voir plus '}
                                                <svg className="w-5 h-5 mr-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>

                                            </button>
                                        </div>
                                        {/* Contenu dropdown caché - visible au clic */}
                                        <div className={` mt-6 grid grid-rows-1 md:grid-rows-3 gap-6 ${showEngins ? 'block animate-fadeIn' : 'hidden'}`}>

                                            <EquipmentCard icon="📐" title="1 Niveau automatique" desc="Nivellement précis" />
                                            <EquipmentCard icon="🚧" title="1 Niveleuse" desc="Nivellement routes" />
                                            <EquipmentCard icon="🔨" title="1 Compacteur" desc="Compactage sols" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                            <svg className="icon-title-card w-10 h-10 text-orange-600 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                                            </svg>
                                            Matériel de Précision
                                        </h3>
                                        <div className="card-materiel space-y-4">
                                            <EquipmentCard icon="📡" title="1 GPS Mapp 60 CX" desc="Topographie précise" />
                                            <EquipmentCard icon="📷" title="Appareil photo Digital" desc="Documentation chantier" />
                                            <EquipmentCard icon="📏" title="2 Décamètres électroniques" desc="Mesures laser" />
                                            <EquipmentCard icon="⚡" title="Groupe électrogène 12 KVA" desc="Alimentation continue" />
                                        </div>
                                    </div>
                                </div>

                                {/* MATÉRIEL ROULANT */}
                                <div className="text-center mb-20">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Matériel Roulant</h3>
                                    <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                                            <div className="text-4xl mb-3">🚐</div>
                                            <h4 className="font-bold text-lg mb-2">1 Mini Van Toyota Noah</h4>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                                            <div className="text-4xl mb-3">🚙</div>
                                            <h4 className="font-bold text-lg mb-2">2 Pajero Mini</h4>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                                            <div className="text-4xl mb-3">🏍️</div>
                                            <h4 className="font-bold text-lg mb-2">1 Moto DT</h4>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                                            <div className="text-4xl mb-3">🚙</div>
                                            <h4 className="font-bold text-lg mb-2">1 Suzuki</h4>
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                                            <div className="text-4xl mb-3">🛻</div>  {/* Land Cruiser */}
                                            <h4 className="font-bold text-lg mb-2">1 GX Land Cruiser Toyota</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* CTA */}

                    </div>
                </section>
            </div>
        );
    }
    return (
        <div>
            <Navbar/>
            <AProposContent/>
            <Footer/>
        </div>
    );
}
