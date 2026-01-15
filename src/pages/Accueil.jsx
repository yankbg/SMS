import { Link } from 'react-router-dom'
import React, {useEffect} from "react";
import {useState} from "react";
import "./style.css";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import video1 from "../assets/video1.mp4";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image002.jpg";
import img3 from "../assets/image003.jpg";
import arrow from "../assets/arrowwhite.png";
import play_icon from "../assets/roundplay.png";
import pause_icon from "../assets/pause.png";

const HeroSection = ({heroData, heroCount, setHeroCount, setPlayStatus, playStatus}) => {
    return(
        <div className="hero-section">
            <div className="hero-text">
                <p className="text1">{heroData.text1}</p>
                <p className="text2">{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <Link to="/contact" className="explore-text">Contactez nous</Link>
                <img src={arrow} alt="arrow" className="arrow-icon"/>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? "hero-dot green" : "hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? "hero-dot green" : "hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? "hero-dot green" : "hero-dot"}></li>
                </ul>
                <div className="hero-play" >
                    <img onClick={()=>setPlayStatus(!playStatus)}  src={playStatus?pause_icon:play_icon} alt="play-icon" className="play-icon"/>
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
}

const Objectif = () => {
    return (
        <section id="objectifs" className="objectifs">
            <div className="container">
                <h2 className="section-title">Nos objectifs</h2>
                <div className="objectifs-grid">
                    <div className="objectif-card">
                        <div className="objectif-number">01</div>
                        <h3>Conception et Realisation</h3>
                        <p>
                            Planifier, concevoiret construire des batiments, routes, ponts et autres infrastructures
                            selonvos besoins specifiques.
                        </p>
                    </div>
                    <div className="objectif-card">
                        <div className="objectif-number">02</div>
                        <h3>Promotion Immobiliere</h3>
                        <p>
                            Developer des projets immobiliers pour la vente ou la location avec de des standards de
                            qualite eleves.
                        </p>
                    </div>
                    <div className="objectif-card">
                        <div className="objectif-number">03</div>
                        <h3>Innovation et Durabilite</h3>
                        <p>
                            Integrer des technologies modernes et des pratiques durables dans tous nos processus des
                            construction.
                        </p>
                    </div>
                    <div className="objectif-card">
                        <div className="objectif-number">04</div>
                        <h3>Import-Export & Logistique</h3>
                        <p>
                            Optimiser vos chaines d'approvisennement avec nos services completsd'import-export et
                            logistique.
                        </p>
                    </div>
                    <div className="objectif-card">
                        <div className="objectif-number">05</div>
                        <h3>E-commerce & Fret</h3>
                        <p>
                            Faciliter vos operations commerciales avec nos services d'e-commerce et de dedouanement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
const StatCard = ({ number, label, icon, color }) => (
    <div className="group relative bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-white/40 hover:border-blue-300">

        {/* Floating Icon Badge */}
        <div className="icon-badge">
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24  ${color} text-4xl flex items-center justify-center rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <span className="drop-shadow-md">{icon}</span>
            </div>
        </div>

        {/* Main Number */}
        <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4 pt-14 group-hover:scale-105 transition-transform duration-300">
                {number}
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-700 tracking-wide">
                {label}
            </div>
        </div>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8 rounded-full opacity-70 group-hover:opacity-100 group-hover:animate-pulse"></div>
    </div>
);

const Apropos = () => {
    return (
        <section className="py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden apropos">

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.25),transparent_60%)]"></div>
            <div className="absolute top-32 right-32 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex-apropos">

                {/* Title Section */}
                <div className="title-apropos">
                    <div className="text-center mb-20 ">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg ">
                            <svg className="w-5 h-5 mr-2 svg-fondee" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <span className="title-fondee">FONDÉE EN 2023</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                            Depuis 2023 à Goma
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-2.5xl mx-auto leading-relaxed">
                            <span className="font-semibold text-blue-900">RCCM CD/GOM/RCCM/23-B-00096</span>{' '}
                            | 12 experts qualifiés | Équipements modernes de pointe
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-10">
                    <StatCard number="12+" label="Experts" icon="👷" color="card-svg-services" />
                    <StatCard number="6+" label="Engins TP" icon="🚜" color="card-svg-services" />
                    <StatCard number="3+" label="Co-entreprises" icon="🌍" color="card-svg-services" />
                </div>

                {/* CTA */}
                <div className="cta-apropos  flex justify-center">
                    <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-white/80 backdrop-blur-md border-2 border-transparent rounded-3xl font-semibold text-lg text-gray-900 hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                        <span>Nos Références Complètes</span>
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return (
            <video className="background fadein" autoPlay loop muted>
                <source src={video1} type="video/mp4"/>
            </video>
        )
    } else if (heroCount === 0) {
        return <img src={img1}  className="background fadein" alt="image1"/>

    } else if (heroCount === 1) {
        return <img src={img2}  className="background fadein" alt="image2"/>

    } else if (heroCount === 2) {
        return <img src={img3} className="background fadein" alt="image 3"/>

    }
}
const Home = () => {
    let heroData = [
        {
            text1: "Reconstruire ensemble l'Afrique durablement",
            text2: "Société Multi Services SMS SARL - Leader en Architecture, Génie Civil & Logistique à Goma (RDC)"
        },
        {
            text1: "SMS SARL : L'Excellence au Cœur de l'Afrique",
            text2: "Conception - Construction - Transport - Import-Export\n" +
                "Partenaire des grands projets en RDC depuis 2023"
        },
        {
            text1: "Votre Partenaire pour la Reconstruction de la RDC", text2:"Architecture | Génie Civil | Travaux Publics | Logistique\n" +
                "Av. Bobila Dawa n°52, Goma | sms.sarl33@gmail.com"},
    ]
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setHeroCount((count)=>{return count===2?0:count+1})
        },3000)
    }, []);

    return (
        <div>
            <div>
                <Background playStatus={playStatus}  heroCount={heroCount} />
                <div className="overlay"></div>
                <Navbar/>
                <HeroSection
                    heroData={heroData[heroCount]}
                    heroCount={heroCount}
                    setHeroCount={setHeroCount}
                    setPlayStatus={setPlayStatus}
                    playStatus={playStatus}
                />
                <Objectif/>

                <Apropos/>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;