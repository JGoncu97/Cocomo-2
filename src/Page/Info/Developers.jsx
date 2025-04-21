import React from 'react';
import ImgJose from '../../Assets/jose.jpeg';
import ImgJoan from '../../Assets/joan.jpeg';
import GitHub from '../../Assets/Github2.jpg';
import {Header} from '../../Components/Header/Header'
import {Footer} from '../../Components/Footer/Footer'

export const Developers = () => {
  // Descripción del Proyecto:
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header title="Desarrolladores" />
      <main className="flex-grow p-4 md:p-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center">
              <img className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-3 md:mb-4" src={ImgJoan} alt="Joan Esteban Hincapie" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Joan Esteban Hincapie</h2>
              <p className="text-sm md:text-base text-gray-600 mb-1 text-center">Estudiante de Ingeniería de Sistemas</p>
              <p className="text-sm md:text-base text-gray-600 mb-1 text-center">Correo: jhincapie@univerdad.edu.co</p>
              <p className="text-sm md:text-base text-gray-600 text-center">Teléfono: 3178250242</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md mt-4 flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <img src={GitHub} alt="GitHub" className="w-4 h-4 rounded-full" />
                <a href="https://github.com/JEHFxD">GitHub</a>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center">
              <img className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-3 md:mb-4" src={ImgJose} alt="Jose Gregorio Gonzalez" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Jose Gregorio Gonzalez</h2>
              <p className="text-sm md:text-base text-gray-600 mb-1 text-center">Estudiante de Ingeniería de Sistemas</p>
              <p className="text-sm md:text-base text-gray-600 mb-1 text-center">Correo: jggonzalez@univerdad.edu.co</p>
              <p className="text-sm md:text-base text-gray-600 text-center">Teléfono: 3178250242</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md mt-4 flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <img src={GitHub} alt="GitHub" className="w-4 h-4 rounded-full" />
                <a href="https://github.com/JGoncu97">GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
 
