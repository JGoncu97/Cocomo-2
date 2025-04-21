import React from 'react'
import ImgProblema from '../../assets/Problema a resolver.png'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'

export const Documentation = () => {
    // Descripción del Proyecto:
  return (
    <div className='bg-white min-h-screen flex flex-col'>
        <Header title="Documentación" />
        <main className='flex-grow p-4 md:p-8 bg-gray-900'>
            <div className='bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center'>
                <h2 className='text-2xl font-bold text-center text-black mb-4'>Problema a resolver : </h2>
                
                {/* Contenido para móviles */}
                <div className="md:hidden bg-gray-100 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center">
                    <p className="text-lg font-semibold">Desarrollar en parejas un aplicativo web responsivo que implemente el modelo intermedio de COCOMO 81 para realizar estimación de esfuerzo en proyectos de software.</p>
                    
                    <h3 className="text-xl font-semibold">Descripción del Proyecto:</h3>
                    <p>El aplicativo debe ser capaz de:</p>
                    
                    <h4 className="font-semibold">Solicitar al usuario las variables necesarias:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Tamaño estimado del proyecto en líneas de código fuente (KLOC)</li>
                        <li>Factores de ajuste relevantes según el modelo intermedio de COCOMO 81</li>
                    </ul>

                    <h4 className="font-semibold">Calcular:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>El esfuerzo en persona-meses</li>
                        <li>Alternativamente, permitir al usuario ingresar:
                            <ul className="list-disc pl-5 mt-2">
                                <li>Número de programadores para calcular la duración en meses</li>
                                <li>O bien, la duración deseada en meses para calcular el equipo necesario</li>
                            </ul>
                        </li>
                    </ul>

                    <h4 className="font-semibold">Funcionalidades adicionales:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Solicitar el sueldo mensual promedio de los programadores</li>
                        <li>Estimar el costo total del proyecto teniendo en cuenta que, si el proyecto excede un año, el sueldo de los programadores aumentará un 5% en el segundo año y así sucesivamente</li>
                    </ul>

                    <h4 className="font-semibold">Requisitos técnicos:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>La aplicación debe ser responsiva y amigable con el usuario</li>
                        <li>Debe desarrollarse con tecnologías web (HTML, CSS, JavaScript, y frameworks si es necesario)</li>
                        <li>La interfaz debe validar correctamente los datos ingresados por el usuario</li>
                    </ul>

                    <h4 className="font-semibold">Entrega:</h4>
                    <p>Cada equipo deberá presentar:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>El aplicativo funcional</li>
                        <li>En una página web un breve informe explicativo que detalle:
                            <ul className="list-disc pl-5 mt-2">
                                <li>Los nombres de los integrantes, mes y año</li>
                                <li>Las variables implementadas</li>
                                <li>Ejemplo de cálculo y su interpretación</li>
                                <li>Tecnologías utilizadas</li>
                            </ul>
                        </li>
                    </ul>

                    <p className="font-semibold">Fecha entrega: 21 de Abril de 2025</p>
                </div>

                {/* Imagen solo para desktop */}
                <div className="hidden md:block">
                    <img src={ImgProblema} alt="Problema a resolver" className="mb-8" />
                </div>

                <h2 className='text-2xl font-bold text-center text-black mb-4'>Solución propuesta : </h2>
                
                <div className="w-full max-w-4xl space-y-6 text-gray-800">
                    <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Integrantes y Fecha</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Jose Gregorio Gonzalez</li>
                            <li>Joan Esteban Hincapie</li>
                            <li>Mes: Abril 2025</li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Variables Implementadas</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>KLOC:</strong> Miles de líneas de código</li>
                            <li><strong>EAF:</strong> Factor de Ajuste del Esfuerzo</li>
                            <li><strong>a, b, c, d:</strong> Constantes del modelo COCOMO</li>
                            <li><strong>Esfuerzo:</strong> Persona-mes</li>
                            <li><strong>Tiempo:</strong> Meses de desarrollo</li>
                            <li><strong>Costo:</strong> Costo total del proyecto</li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Ejemplo de Cálculo e Interpretación</h3>
                        <div className="space-y-4">
                            <p>Para un proyecto con las siguientes características:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>KLOC: 10 (10,000 líneas de código)</li>
                                <li>EAF: 1.2 (Factor de ajuste)</li>
                                <li>Modelo: Orgánico (a=2.4, b=1.05, c=2.5, d=0.38)</li>
                            </ul>
                            <p className="font-semibold">Cálculos:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Esfuerzo = 2.4 * (10)^1.05 * 1.2 = 31.2 persona-mes</li>
                                <li>Tiempo = 2.5 * (31.2)^0.38 = 8.7 meses</li>
                                <li>Costo = Esfuerzo * Costo por persona-mes</li>
                            </ul>
                            <p className="mt-4">Interpretación: Este proyecto requerirá aproximadamente 31.2 meses-persona de esfuerzo, se completará en 8.7 meses y el costo dependerá del costo por persona-mes en la organización.</p>
                        </div>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-3">Tecnologías Utilizadas</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Frontend:</strong> React.js con Vite</li>
                            <li><strong>Estilos:</strong> Tailwind CSS</li>
                            <li><strong>Ruteo:</strong> React Router</li>
                            <li><strong>Control de Versiones:</strong> Git</li>
                            <li><strong>Desarrollo:</strong> Visual Studio Code</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
