import React from 'react'
import card1 from "../../assets/images/card1.png"
import cardd3 from "../../assets/images/cardd3.png"
import card6 from "../../assets/images/card6.png"
import MiniTitle from '../Utilitaires/MiniTitle'

const Etape1 = () => {
  return (
    <div>
        <div>
            <button className='bg-linear-to-b/srgb from-teal-200 to-white-400 text-black font-bold py-10 px-20 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mx-auto flex items-center justify-center relative cursor-pointer'>
                <div className='w-md'>
                    <img className='mask mask-circle w-60 bg-blue-400' src={card1} alt="Etape 1" />
                    <img className='mask mask-circle w-60 bg-teal-400' src={cardd3} alt="Etape 1" />
                    <img className='mask mask-circle w-60 bg-indigo-300 ' src={card6} alt="Etape 1" />
                    <MiniTitle title="Sélectionnez facilement" paragraphe="le crédit de votre choix via notre simulateur" />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Etape1
