import React, { useState, useEffect } from 'react'
import Title from '../Utilitaires/Title'
import Step from '../Utilitaires/Step'
import main1 from "../../assets/images/main1.webp"
import main2 from "../../assets/images/main2.webp"
import main3 from "../../assets/images/main3.webp"
import MiniTitle from '../Utilitaires/MiniTitle'

const cards = [
  {
    img: main1,
    title: 'Sélectionnez facilement',
    paragraphe: 'le crédit de votre choix via notre simulateur',
  },
  {
    img: main2,
    title: 'Remplissez rapidement',
    paragraphe: 'notre formulaire en 4min directement en ligne ',
  },
  {
    img: main3,
    title: 'Recevez instantanément',
    paragraphe: 'à la fin de votre formulaire',
  },
]

const Clearfix = () => {
  const [current, setCurrent] = useState(0)

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div>
        <Title
          Title1={'Le'}
          ColorTitle={"réflexe"}
          Title2={'qui facilite votre crédit'}
          paragraph={"Notre technologie propriétaire permet d'analyser en temps réel l'éligibilité de votre demande de crédit en fonction des critères de nos 300+  partenaires, prêteur et organismes de crédit en ligne. Moins d'étapes, de formulaires et d'intérmédiaires : Youdge centralise toutes vos démarches en quelques clics ! Découvrez les différents types de crédits rapides et trouvez celui qui vous correspond."}
        />
        <Step />
      </div>
      {/* Carrousel mobile/tablette */}
      <div className="block md:hidden w-full max-w-md mx-auto py-2">
        <div className="relative flex flex-col items-center bg-gradient-to-b from-teal-200 to-white rounded-xl shadow-lg p-8 cursor-pointer transition hover:shadow-2xl overflow-hidden min-h-[320px]">
          <img src={cards[current].img} alt={cards[current].title} className="w-full h-full object-contain  inset-0" />
          <div className="relative z-10 flex flex-col items-center rounded-xl p-6 mt-5 w-full">
            <MiniTitle title={cards[current].title} paragraphe={cards[current].paragraphe} />
          </div>
        </div>
      </div>
      {/* Grille 3 colonnes sur desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-2">
        {cards.map((card, idx) => (
          <div key={idx} className="relative flex flex-col items-center bg-gradient-to-b from-teal-200 to-white rounded-xl shadow-lg p-8 cursor-pointer transition hover:shadow-2xl overflow-hidden min-h-[200px]">
            <img src={card.img} alt={card.title} className="w-full h-full object-contain  inset-0" />
            <div className="relative z-10 flex flex-col items-center rounded-xl p-6 mt-5 w-full">
              <MiniTitle title={card.title} paragraphe={card.paragraphe} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clearfix
