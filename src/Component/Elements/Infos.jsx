import React from 'react';
import { useTranslation } from 'react-i18next';

const Infos = () => {
  const { t } = useTranslation();

  const InfosData = [
    { id: 1, titre: t('infos.card1.title'), description: t('infos.card1.description') },
    { id: 2, titre: t('infos.card2.title'), description: t('infos.card2.description') },
    { id: 3, titre: t('infos.card3.title'), description: t('infos.card3.description') },
    { id: 4, titre: t('infos.card4.title'), description: t('infos.card4.description') },
  ];

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <h2 className='text-3xl font-bold text-center mb-8'>{t('infos.title')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {InfosData.map((info) => (
            <div key={info.id} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>{info.titre}</h3>
              <p className='text-gray-600'>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infos;
