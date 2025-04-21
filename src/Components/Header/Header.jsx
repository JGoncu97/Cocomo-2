import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'      

export const Header = ({title}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="p-2 md:p-4 bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 relative">
            <div className="w-full md:w-auto flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-bold text-center">{title}</h1>
                <button 
                    className="md:hidden p-2 rounded-md hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        )}
                    </svg>
                </button>
            </div>
            
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto absolute md:relative top-full left-0 bg-blue-900 md:bg-transparent z-10`}>
                <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-2 md:p-0">
                    <li className="w-full md:w-auto">
                        <a 
                            className="inline-block font-semibold w-full md:w-auto px-3 py-2 md:px-4 md:bg-blue-900 py-2 rounded-md hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 cursor-pointer text-sm md:text-base text-center hover:scale-105 active:scale-95"
                            onClick={() => handleNavigate('/')}
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a 
                            className="inline-block font-semibold w-full md:w-auto px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 cursor-pointer text-sm md:text-base text-center hover:scale-105 active:scale-95"
                            onClick={() => handleNavigate('/developers')}
                        >
                            Desarrolladores
                        </a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a 
                            className="inline-block font-semibold w-full md:w-auto px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 cursor-pointer text-sm md:text-base text-center hover:scale-105 active:scale-95"
                            onClick={() => handleNavigate('/document')}
                        >
                            Documentación
                        </a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a 
                            className="inline-block font-semibold w-full md:w-auto px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 cursor-pointer text-sm md:text-base text-center hover:scale-105 active:scale-95"
                            onClick={() => handleNavigate('/application')}
                        >
                            Calculadora
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
