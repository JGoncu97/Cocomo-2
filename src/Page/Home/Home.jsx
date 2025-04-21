import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }
  return (
    <div className="bg-white min-h-screen flex flex-col">
        <header className="p-4 bg-blue-900 text-white">
            <h1 className="text-2xl md:text-3xl font-bold text-center">CALCULADORA DE COCOMO</h1>
        </header>
        <main className='flex-grow p-4 flex flex-col items-center justify-center gap-4 bg-gray-900'>
            <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto px-4">
                <h2 className="text-center text-white font-bold text-3xl xs:text-xl">Bienvenidos a nuestra aplicación. Aquí encontrarás información sobre nuestros desarrolladores y la documentación de nuestra aplicación.</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                    <button 
                        className="bg-blue-900 font-semibold text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors w-full sm:w-auto" 
                        onClick={() => handleNavigate('/developers')}
                    >
                        Desarrolladores
                    </button>
                    <button 
                        className="bg-blue-900 font-semibold text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors w-full sm:w-auto" 
                        onClick={() => handleNavigate('/document')}
                    >
                        Documentación
                    </button>  
                    <button 
                        className="bg-green-500 font-semibold text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors w-full sm:w-auto" 
                        onClick={() => handleNavigate('/application')}
                    >
                        Calculadora
                    </button> 
                </div>
            </div>
        </main>
        <footer className="p-4 bg-blue-900 text-white text-center text-sm md:text-base">
            <p>Derechos reservados © 2025 Joan Esteban Hincapie y Jose Gregorio Gonzalez</p>
        </footer>
    </div>
  )
}
