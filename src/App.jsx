import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from "./pages/APropos";
import Services from "./pages/Services";
import Contact from './pages/Contact';

export default function App() {
    return (
        <div className="min-h-screen">
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/service" element={<Services />} />
                <Route path="/contact" element={<Contact />} />


            </Routes>
        </div>
    )
}
