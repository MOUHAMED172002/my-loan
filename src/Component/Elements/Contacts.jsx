import React from 'react';
import { AiFillMessage } from "react-icons/ai";
import { PiSealQuestionFill } from "react-icons/pi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl justify-center flex font-bold mb-6">{t('contacts.title')}</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <AiFillMessage className="text-2xl mb-2" />
            <h3 className="text-lg font-semibold">{t('contacts.messaging')}</h3>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <PiSealQuestionFill className="text-2xl mb-2" />
            <h3 className="text-lg font-semibold">{t('contacts.questions')}</h3>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <BsBookmarkStarFill className="text-2xl mb-2" />
            <h3 className="text-lg font-semibold">{t('contacts.appointment')}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
