import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import Title from '../Utilitaires/Title'

const reviews = [
  {
    date: "2025-09-01",
    name: "Sophie L.",
    text: "Service rapide et efficace, j'ai obtenu mon crédit en un temps record. Merci Myloan !",
    rating: 5,
  },
  {
    date: "2025-08-28",
    name: "Marc D.",
    text: "Très satisfait de l'accompagnement. L'équipe est à l'écoute et professionnelle.",
    rating: 4,
  },
  {
    date: "2025-08-25",
    name: "Fatou S.",
    text: "Processus simple et transparent, je recommande vivement Myloan.",
    rating: 5,
  },
  {
    date: "2025-08-20",
    name: "Youssef B.",
    text: "Bonne expérience, mais le délai de réponse pourrait être amélioré.",
    rating: 3,
  },
  {
    date: "2025-08-18",
    name: "Claire P.",
    text: "Très bon service client, réponses rapides à toutes mes questions.",
    rating: 5,
  },
  {
    date: "2025-08-15",
    name: "Julien R.",
    text: "Site facile à utiliser, démarches rapides. Je recommande.",
    rating: 4,
  },
  {
    date: "2025-08-12",
    name: "Nadia K.",
    text: "J'ai apprécié la clarté des informations et la rapidité du traitement.",
    rating: 5,
  },
  {
    date: "2025-08-10",
    name: "Olivier M.",
    text: "Bon accompagnement, mais quelques lenteurs dans la validation.",
    rating: 3,
  },
  {
    date: "2025-08-08",
    name: "Amina T.",
    text: "Très satisfaite, j'ai pu financer mon projet sans stress.",
    rating: 5,
  },
  {
    date: "2025-08-05",
    name: "Lucas V.",
    text: "Plateforme intuitive, service client disponible. Merci Myloan.",
    rating: 4,
  },
  {
    date: "2025-08-03",
    name: "Sarah G.",
    text: "Tout s'est bien passé, je recommande sans hésiter.",
    rating: 5,
  },
  {
    date: "2025-08-01",
    name: "Karim E.",
    text: "Bonne expérience, mais le taux proposé était un peu élevé.",
    rating: 3,
  },
  {
    date: "2025-07-29",
    name: "Isabelle F.",
    text: "Service rapide, équipe professionnelle et à l'écoute.",
    rating: 5,
  },
  {
    date: "2025-07-27",
    name: "Mohamed Z.",
    text: "Très satisfait, démarches simples et efficaces.",
    rating: 4,
  },
  {
    date: "2025-07-25",
    name: "Julie N.",
    text: "J'ai obtenu mon crédit sans difficulté, merci à toute l'équipe.",
    rating: 5,
  },
  {
    date: "2025-07-22",
    name: "Antoine C.",
    text: "Bon service, mais j'aurais aimé plus d'options de personnalisation.",
    rating: 4,
  },
  {
    date: "2025-07-20",
    name: "Mélanie D.",
    text: "Très bon suivi, je me suis sentie accompagnée du début à la fin.",
    rating: 5,
  },
  {
    date: "2025-07-18",
    name: "Rachid H.",
    text: "Service correct, mais quelques lenteurs dans la réponse.",
    rating: 3,
  },
  {
    date: "2025-07-15",
    name: "Céline B.",
    text: "Plateforme claire, démarches rapides, je recommande Myloan.",
    rating: 5,
  },
  {
    date: "2025-07-12",
    name: "Vincent T.",
    text: "Très satisfait du service, équipe réactive et professionnelle.",
    rating: 5,
  },
]

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) =>
      i < rating
        ? <AiFillStar key={i} className="text-yellow-400" />
        : <AiOutlineStar key={i} className="text-gray-300" />
    )}
  </div>
)

const Témoignage = () => {
  const [current, setCurrent] = useState(0)

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Nombre de témoignages visibles selon la taille d'écran
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3 // lg+
    if (window.innerWidth >= 768) return 2 // md
    return 1 // sm
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Découpe les avis à afficher
  const visibleReviews = []
  for (let i = 0; i < visibleCount; i++) {
    visibleReviews.push(reviews[(current + i) % reviews.length])
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
        <Title Title1={"Votre"} ColorTitle={"satisfaction"} Title2={", notre première ambition"} paragraph={"Consultez l'avis de nos clients"}  />
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-${visibleCount} transition-all duration-500`}>
        {visibleReviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 min-h-[180px]">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{review.date}</span>
              <StarRating rating={review.rating} />
            </div>
            <div className="font-semibold text-teal-600">{review.name}</div>
            <div className="text-gray-700">{review.text}</div>
          </div>
        ))}
      </div>
      {/* Petits points d'indication */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-teal-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Témoignage
