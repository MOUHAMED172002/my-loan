import React, { useEffect, useState } from 'react'
import Title from '../Utilitaires/Title'

const Compteur = () => {
  const CompteurData = [
    { id: 1, number: 500, description: "partenaires (courtiers et établissements de crédit)" },
    { id: 2, number: 6000, description: "demandes de financement par jour" },
    { id: 3, number: 400000, description: "crédits octroyés" },
    { id: 4, number: 500621, description: "Rachats de prêts réalisés*" },
    { id: 5, number: 600000, description: "projets de prêt personnel réalisés*" },
    { id: 6, number: 43987, description: "projets de crédit automobile réalisés*" },
  ];

  // State pour chaque compteur animé
  const [counts, setCounts] = useState(CompteurData.map(() => 0));

  useEffect(() => {
    const durations = CompteurData.map(() => 1200); // Durée de l'animation en ms
    const steps = 60; // Nombre d'étapes de l'animation

    CompteurData.forEach((item, idx) => {
      let start = 0;
      const end = item.number;
      const increment = Math.ceil(end / steps);
      let current = start;

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[idx] = current;
          return updated;
        });
      }, durations[idx] / steps);
    });
  // eslint-disable-next-line
  }, []);

  // Fonction pour formater les nombres avec des espaces ou virgules
  const formatNumber = (num) => num.toLocaleString('fr-FR');

  return (
    <div>
      <Title ColorTitle={"Myloan,"} Title2={"c'est aussi : "} paragraph={"Découvrez notre comparateur au travers de différents chiffres clés"} />
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4'>
        {
          CompteurData.map((compteur, idx) => (
            <div key={compteur.id} className='bg-gray-200 rounded-xl shadow p-6 flex flex-col items-center justify-center text-center h-full'>
              <div className='text-5xl font-bold text-teal-600'>
                {formatNumber(counts[idx])}
              </div>
              <div className='text-lg mt-2 text-gray-700'> {compteur.description} </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Compteur
