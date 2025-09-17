import React, { useEffect, useState } from 'react';
import Title from '../Utilitaires/Title';
import { useTranslation } from 'react-i18next';

const Compteur = () => {
  const { t, i18n } = useTranslation();

  const CompteurData = t("compteur.items", { returnObjects: true });
  const compteurArray = Array.isArray(CompteurData) ? CompteurData : [];

  const [counts, setCounts] = useState(compteurArray.map(() => 0));

  useEffect(() => {
    setCounts(compteurArray.map(() => 0));
    const durations = compteurArray.map(() => 1200);
    const steps = 60;

    compteurArray.forEach((item, idx) => {
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

    // Nettoyage des intervalles si le composant est démonté ou la langue change
    return () => {
      // Rien à nettoyer ici car chaque setInterval est clearInterval quand terminé
    };
  // eslint-disable-next-line
} , [compteurArray]);

  const formatNumber = (num) => num.toLocaleString(i18n.language);

  return (
    <div>
      <Title
        ColorTitle={t('compteur.title.colorTitle')}
        Title2={t('compteur.title.title2')}
        paragraph={t('compteur.title.paragraph')}
      />
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4'>
        {compteurArray.map((compteur, idx) => (
          <div key={idx} className='bg-gray-200 rounded-xl shadow p-6 flex flex-col items-center justify-center text-center h-full'>
            <div className='text-5xl font-bold text-teal-600'>
              {formatNumber(counts[idx])}
            </div>
            <div className='text-lg mt-2 text-gray-700'>
              {compteur.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compteur;
