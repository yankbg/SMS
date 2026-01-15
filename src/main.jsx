import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css'  // ✅ AOS CSS global
import AOS from 'aos'      // ✅ AOS JS

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*<App />*/}
    </StrictMode>,
)
AOS.init({
    duration: 1000,      // 1 seconde
    easing: 'ease-out-cubic',
    once: true,          // 1x seulement
    offset: 100,         // Déclenchement
    mirror: false
});
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    disable: window.innerWidth < 768,  // Pas mobile
    offset: 120
});