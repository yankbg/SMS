// import {Routes, Route, Link } from 'react-router-dom'
// // import Navbar from './components/Navbar'
// import Accueil from './pages/Accueil'
// import APropos from './pages/APropos'
// import Projets from './pages/Projets'
// import Contact from './pages/Contact'
//
// export default function App() {
//   return (
//           <div className="min-h-screen bg-gray-50">
//               {/*<Navbar />*/}
//
//               <Routes>
//                   <Route path="/" element={<Accueil />} />
//                   <Route path="/a-propos" element={<APropos />} />
//                   <Route path="/projets" element={<Projets />} />
//                   <Route path="/contact" element={<Contact />} />
//               </Routes>
//           </div>
//
//   )
// }
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from "./pages/APropos.jsx";

export default function App() {
    return (
        <div className="min-h-screen">
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/test" element={<div style={{padding: '50px'}}><h2>✅ TEST</h2></div>} />
                <Route path="/a-propos" element={<APropos />} />
            </Routes>
        </div>
    )
}
