import React from 'react'
import { CocomoCalculator } from '../../Components/CocomoCalculator'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'



export const Application = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
          <Header title="Calculadora COCOMO" />
        <main className='flex-grow p-4 md:p-8 bg-gray-900'>
            <div className='max-w-6xl mx-auto'>
                <CocomoCalculator />
            </div>
        </main>
        <Footer />
    </div>
  )
}
