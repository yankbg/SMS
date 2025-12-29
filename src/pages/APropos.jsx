import React from 'react';
import Navbar from "../component/Navbar.jsx";
import './style.css'

export default function APropos() {
    const Home = () => {
        return (
            <div className="main-apropos min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                {/* Hero À Propos */}
                <section className="pt-32 pb-24 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-white/80 bg-clip-text mb-6">
                                À Propos
                            </h1>
                            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
                                Société Multi Services <span className="font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">SMS SARL</span>
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
                                <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold">
                                    RCCM CD/GOM/RCCM/23-B-00096
                                </div>
                                <div className="bg-emerald-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-lg font-semibold border border-emerald-400/30">
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
                            <div className="space-y-8">
                                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-semibold w-fit">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                    </svg>
                                    NOTRE MISSION
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 max-w-lg leading-tight">
                                    Contribuer à la reconstruction<br/>
                                    <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">de notre cher pays</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                                    Avec un profond désir de participer à la reconstruction de la RDC, SMS SARL offre des services d'excellence
                                    dans l'architecture, génie civil, travaux publics, transport, logistique et import-export.
                                </p>
                            </div>
                            <div className="relative">
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
                <section className="py-24 bg-gradient-to-r from-gray-50 to-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Nos Forces</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Expertise humaine et matérielle au service de vos projets
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 mb-20">
                            {/* Équipe */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">Équipe Qualifiée</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Architectes</h4>
                                            <p className="text-gray-600">Conception innovante et esthétique</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Ingénieurs Civils</h4>
                                            <p className="text-gray-600">Expertise BTP reconnue</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Références Admin */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">Références Officielles</h3>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-500">
                                        <span className="font-mono text-sm bg-blue-100 px-3 py-1 rounded-full">RCCM</span>
                                        <div className="font-bold text-lg mt-2">CD/GOM/RCCM/23-B-00096</div>
                                    </div>
                                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                                        <span className="font-mono text-sm bg-emerald-100 px-3 py-1 rounded-full">ID Nat.</span>
                                        <div className="font-bold text-lg mt-2">19-F4200-N42091Z</div>
                                    </div>
                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-500">
                                        <span className="font-mono text-sm bg-purple-100 px-3 py-1 rounded-full">IMPÔT</span>
                                        <div className="font-bold text-lg mt-2">A2403844F</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <a href="/contact" className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-2 transition-all duration-300">
                                <span>Discuter de votre projet</span>
                                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    return (
    <div>
        <Navbar/>
        <Home />
    </div>
    );
}
