import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css'

export default function NotFound() {
    useEffect(() => {
        document.title = 'Page non trouvée - SMS SARL';
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-emerald-50 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-md mx-auto">
                {/* Icon + Title */}
                <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                    <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Page non trouvée</p>
                    <p className="text-lg text-gray-600">La page que vous cherchez n'existe pas.</p>
                </div>

                {/* Primary Action Buttons - Large & Prominent */}
                <div className="space-y-4 mb-12">
                    <Link
                        to="/"
                        className="notfound block w-full max-w-sm mx-auto bg-gradient-to-r from-blue-400 to-blue-800 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        🏠 Accueil
                    </Link>
                    <Link
                        to="/service"
                        className="notfound block w-full max-w-sm mx-auto bg-white border-2 border-orange-500 hover:border-emerald-500 text-orange-600 hover:text-emerald-600 font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        🔧 Nos Services
                    </Link>
                </div>

                {/* Quick Search + Footer Nav */}
                <div className="space-y-6">

                    <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
                        <Link to="/" className="hover:text-orange-500 transition-colors">Accueil</Link>
                        <Link to="/service" className="hover:text-orange-500 transition-colors">Services</Link>
                        <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
                        <Link to="/a-propos" className="hover:text-orange-500 transition-colors">À propos</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
        </div>
    );
}
