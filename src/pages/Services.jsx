import React from 'react';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import './style.css';

export default function Services() {
    const ServiceCard = ({icon, title, desc, details, color}) => (
        <div className="service-card group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-200/50 hover:border-orange-300 overflow-hidden">
            <div className={`service-icon w-20 h-20 ${color} text-3xl flex items-center justify-center rounded-3xl mb-6 shadow-2xl group-hover:scale-110 transition-all mx-auto`}>
                <span>{icon}</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-700 transition-colors text-center">{title}</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed text-center">{desc}</p>
            <ul className="service-details space-y-2 mb-8 text-left">
                {details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {detail}
                    </li>
                ))}
            </ul>
            <div className="service-cta text-center pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-500 font-medium group-hover:text-orange-600 transition-colors">En savoir plus →</span>
            </div>
        </div>
    );

    const ServicesContent = () => {
        return (
            <div className="main-services min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
                {/* Hero Services */}
                <section className="hero-section-service pt-32 pb-24 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,165,0,0.2),transparent_50%)]"></div>
                    <div className="hero-text-001 container mx-auto px-6 relative z-10">
                        <div className="hero-text-services max-w-4xl mx-auto text-center text-white">

                            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white to-orange-100 bg-clip-text mb-6">
                                Nos Services
                            </h1>
                            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
                                Solutions complètes en <span className="font-bold bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 bg-clip-text text-transparent">Architecture, Génie Civil & Logistique</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Principaux */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                            {/* Génie Civil */}
                            <ServiceCard
                                icon="🏗️"
                                title="Conception, Étude et Exécution"
                                desc="Travaux publics et génie civil complets"
                                details={[
                                    "Conception et études techniques",
                                    "Exécution bâtiments et infrastructures",
                                    "Routes, ponts, voiries",
                                    "Plans et calculs certifiés"
                                ]}
                                color="card-svg-services"
                            />

                            {/* Promotion Immobilière */}
                            <ServiceCard
                                icon="🛒"
                                title="Fourniture Matériaux de Construction"
                                desc="Tous matériaux de qualité pour vos chantiers"
                                details={[
                                    "Ciment, ferraillage, tôles",
                                    "Livraison directe chantier",
                                    "Quantités précises",
                                    "Tarifs compétitifs"
                                ]}
                                color="card-svg-services"
                            />

                            {/* Logistique */}
                            <ServiceCard
                                icon="🚚"
                                title="Import-Export, Transport & Logistique"
                                desc="Solutions logistiques internationales optimisées"
                                details={[
                                    "Importation équipements lourds",
                                    "Transport fret maritime/aérien",
                                    "Dédouanement rapide",
                                    "Stockage et distribution"
                                ]}
                                color="card-svg-services"
                            />
                        </div>
                    </div>
                </section>

                {/* Services Complémentaires */}
                <section className="section-complementaire py-24 bg-gradient-to-r from-gray-50 to-orange-50">
                    <div className="service-complementaire container mx-auto px-6">
                        <div className="titre-service-complementaire text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text text-transparent mb-6">
                                Services Complémentaires
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                                Expertise technique pour tous vos besoins spécifiques
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard
                                icon="🚜"
                                title="Véhicules et Engins de Chantier"
                                desc="Importation, achat et vente d'engins TP"
                                details={[
                                    "Excavatrices, chargeurs, camions",
                                    "GX Land Cruiser, Toyota Noah",
                                    "Maintenance et pièces détachées",
                                    "Location court/long terme"
                                ]}
                                color="card-svg-services"
                            />

                            <ServiceCard
                                icon="📊"
                                title="Évaluation Immobilière"
                                desc="Expertise pour fixer prix de vente/location"
                                details={[
                                    "Estimation valeur biens immobiliers",
                                    "Études de marché locales",
                                    "Rapports certifiés",
                                    "Conseil investissement"
                                ]}
                                color="card-svg-services"
                            />

                            <ServiceCard
                                icon="🤝"
                                title="Conseil et Accompagnement Immobilier"
                                desc="Guidance stratégique pour vos investissements"
                                details={[
                                    "Décisions d'investissement sécurisées",
                                    "Analyse marché RDC",
                                    "Réglementations locales",
                                    "Partenariats co-entreprises"
                                ]}
                                color="card-svg-services"
                            />
                        </div>
                    </div>
                </section>

                {/* Modèle d'affaires */}
                <section className="modele-section py-24 bg-gradient-to-br from-orange-600/10 to-orange-700/10">
                    <div className="container mx-auto px-6">
                        <div className="modele-top text-center mb-20">
                            <div className="modele-title inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl text-lg font-bold mb-8 shadow-2xl">
                                NOTRE MODÈLE
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                                Approche <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Intégrée & Collaborative</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            <div className="modele-card text-center p-12 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/25 transition-all">
                                <div className="card-svg-services w-24 h-24  rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl shadow-xl">
                                    🤝
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Co-entreprises Internationales</h3>
                                <p className="text-lg text-gray-700  mx-auto ">
                                    Partenariats avec Rhombus Construction (RDC), Nobac International (Burundi),
                                    M'S Resources (Tanzanie) pour des projets d'envergure.
                                </p>
                            </div>

                            <div className="modele-card text-center p-12 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/25 transition-all">
                                <div className="card-svg-services w-24 h-24  rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl shadow-xl">
                                    ⚙️
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clé en Main</h3>
                                <p className="text-lg text-gray-700  mx-auto">
                                    De l'étude à la remise des clés : conception, réalisation, logistique,
                                    maintenance. Un interlocuteur unique pour tous vos projets.
                                </p>
                            </div>

                            <div className="modele-card text-center p-12 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-orange-500/25 transition-all">
                                <div className="card-svg-services w-24 h-24  rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl shadow-xl">
                                    🌱
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Durabilité & Innovation</h3>
                                <p className="text-lg text-gray-700  mx-auto">
                                    Technologies modernes, matériaux durables, pratiques éco-responsables.
                                    BTP du 21ème siècle pour la reconstruction de la RDC.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    };

    return (
        <div>
            <Navbar />
            <ServicesContent />
            <Footer />
        </div>
    );
}
