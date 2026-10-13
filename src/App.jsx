import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Accueil from './pages/Accueil'
import APropos from "./pages/APropos";
import Services from "./pages/Services";
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
    // AOS doit demarrer APRES le premier rendu de React. Lance avant, il ne
    // trouve aucun element [data-aos] : quand il est desactive il ne peut donc
    // pas retirer les attributs, et la regle `[data-aos]{opacity:0}` de aos.css
    // laisse toute la page invisible (cas du mobile).
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            mirror: false,
            offset: 120,
            disable: () =>
                window.innerWidth < 768 ||
                window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        });
    }, []);

    return (
        <div className="min-h-screen">
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/service" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />


            </Routes>
        </div>
    )
}
