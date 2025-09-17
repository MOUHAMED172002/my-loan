import React from 'react';
import { useTranslation } from 'react-i18next';

const Card1Ext = ({ img, title, description, h2, bgColor }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center px-2">
      <div className={`card card-xl lg:card-side bg-base-100 shadow-sm w-full max-h-xl`}>
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <figure className="w-full h-full">
            <img
              src={img}
              alt={title}
              className={`object-contain w-full h-48 sm:h-64 md:h-80 lg:h-[400px] rounded-t-lg lg:rounded-l-lg ${bgColor}`}
            />
          </figure>
        </div>
        <div className={`card-body w-full lg:w-1/2 py-6 px-4 text-white ${bgColor}`}>
          <h1 className="card-title text-2xl pb-4 md:text-3xl lg:text-4xl font-extrabold">{title}</h1>
          <h2 className="text-lg md:text-xl font-bold">{h2}</h2>
          <p className="font-sans text-base md:text-lg">{description}</p>
          <div className="card-actions justify-start mt-4">
            <button className="btn rounded-full btn-warning">{t('card1ext.button')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1Ext;
