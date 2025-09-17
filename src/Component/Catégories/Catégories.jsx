import React from 'react'
import Title from '../Utilitaires/Title'
import Cards from './Cards'
import { useTranslation } from 'react-i18next';

const Catégories = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title
        Title1={t("categories.title1")}
        ColorTitle={t("categories.colorTitle")}
        Title2={t("categories.title2")}
        paragraph={t("categories.paragraph")}
      />
      <Cards />
    </div>
  );
};
export default Catégories
