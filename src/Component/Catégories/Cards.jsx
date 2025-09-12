import React, { useState, useEffect } from 'react'
import Button from '../Utilitaires/Button'
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/cardd3.png"
import card4 from "../../assets/images/card4.png"
import card5 from "../../assets/images/card5.png"
import card6 from "../../assets/images/card6.png"


const Cards = () => {
  const [current, setCurrent] = useState(0);

  const cardData = [
    {
      id: 1,  
      img:card1,
      title: "Crédit express",
      content: "Le crédit express offre une grande flexibilité pour tous vos besoins d’argent urgents : dépenses, réparations, ou factures imprévues. Si vous cherchez un crédit rapide et sans refus, optez pour la simplicité en accédant aux fonds instantanés de ce crédit rapide sans le tracas des procédures traditionnelles.",
      color: "bg-gradient-to-r from-sky-600 to-blue-800"
    },
    {
      id: 2,  
      img:card2,
      title: "Crédit automobile",
      content: "Des taux d’intérêt plus bas que le prêt personnel rendent le crédit auto souvent plus avantageux pour financer l’achat d'une nouvelle voiture. Découvrez les meilleures offres de crédit rapide du simulateur Youdge et roulez vers votre projet sans vous laisser freiner par le manque de budget.",
      color: "bg-gradient-to-r from-orange-300 to-yellow-400"
    },
    {
      id: 3,
      img:card3,
      title: " Le Préts personnels",
      content: "Besoin de trésorerie pour un grand projet ? Le prêt personnel est là pour répondre à votre cas particulier. Youdge vous détaille son fonctionnement, comment y accéder, ses critères et conditions personnalisées. Comparez les offres via notre simulateur et choisissez la tranquillité de ce crédit rapide et sur mesure !",
      color: "bg-gradient-to-r from-teal-500 to-emerald-600"
    },
    {
      id: 4,
      img:card4,
      title: "Préts travaux",
      content: "Spécialement conçu pour vous aider à concrétiser vos projets d’aménagement et de rénovations sur mesure, le crédit travaux est le moyen idéal pour gérer votre budget efficacement. Découvrez comment obtenir les fonds pour vos travaux immédiatement grâce aux offres de crédits rapides de notre simulateur.",
      color: "bg-gradient-to-r from-red-400 to-orange-300"
    },
    {
      id: 5,
      img:card5,
      title: "Crédit renouvelable",
      content: "Si vous avez besoin d'une réserve d'argent disponible de façon permanente, le crédit renouvelable vous permet d’y accéder à tout moment. Ce crédit rapide offre la flexibilité dont vous avez besoin pour gérer votre budget en temps réel. Découvrez l'offre qui vous convient le mieux grâce à notre simulateur.",
      color: "bg-gradient-to-r from-green-400 to-emerald-600"
    },
    {
      id: 6,
      img:card6,
      title: "Rachat de crédit",
      content: "Le rachat de crédit, c'est votre chance de reprendre le contrôle de vos finances. Il offre un large éventail de solutions pour consolider vos dettes efficacement et ainsi, simplifier la gestion de votre budget. Youdge vous montre comment l'utiliser pour multiplier vos chances de faire des économies..",
      color: "bg-gradient-to-r from-purple-600 to-indigo-700"
    }
  ];

  // Carrousel automatique pour sm
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [cardData.length])

  return (
    <div className='bg-gray-200'>
      {/* Carrousel automatique pour sm */}
      <div className="sm:block md:hidden lg:hidden px-4 py-10 max-w-md mx-auto relative">
        <div className="flex justify-center">
          <div className={`${cardData[current].color} rounded-4xl shadow-md p-6 flex flex-col items-center w-full`}>
            <img src={cardData[current].img} alt={cardData[current].title} className="w-60 h-auto mb-4" />
            <h2 className="text-2xl text-white font-bold font-sans mb-2">{cardData[current].title}</h2>
            <p className="text-white text-center mb-4">{cardData[current].content}</p>
            <Button label={'En savoir plus'} />
          </div>
        </div>
        {/* Petits points d'indication */}
        <div className="flex justify-center mt-4 gap-2">
          {cardData.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
      {/* Grille normale pour md+ */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10 max-w-7xl mx-auto">
        {cardData.map(card => (
          <div key={card.id} className={`${card.color} rounded-4xl shadow-md p-6 flex flex-col items-center`}>
            <img src={card.img} alt={card.title} className="w-60 h-auto mb-4" />
            <h2 className="text-2xl text-white font-bold font-sans mb-2">{card.title}</h2>
            <p className="text-white text-center mb-4">{card.content}</p>
            <Button label={'En savoir plus'} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
