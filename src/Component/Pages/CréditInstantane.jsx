import React from 'react'
import Card1Ext from '../Elements/Card1-ext';
import instance from '../../assets/images/instance.jpeg'
import Footer from '../Footer/Footer';
import Infos from '../Elements/Infos';
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next';

const CréditInstantane = () => {
  const { t } = useTranslation(); // 👈 namespace

  return (
    <div>
      <Card1Ext
        img={instance}
        title={t("creditInstantane.card.title")}
        h2={t("creditInstantane.card.h2")}
        description={t("creditInstantane.card.description")}
        bgColor="bg-indigo-600"
      />

      <Texte
        Title1={t("creditInstantane.texte1.title1")}
        ColorTitle={t("creditInstantane.texte1.colorTitle")}
        paragraph={t("creditInstantane.texte1.paragraph")}
        BgColor="text-blue-600"
      />

      <Texte
        Title1={t("creditInstantane.texte2.title1")}
        ColorTitle={t("creditInstantane.texte2.colorTitle")}
        Title2={t("creditInstantane.texte2.title2")}
        paragraph={t("creditInstantane.texte2.paragraph")}
        BgColor="text-blue-600"
      />

      <Texte
        Title1={t("creditInstantane.texte3.title1")}
        ColorTitle={t("creditInstantane.texte3.colorTitle")}
        paragraph={t("creditInstantane.texte3.paragraph")}
        BgColor="text-blue-600"
      />

      <Texte
        Title1={t("creditInstantane.texte4.title1")}
        ColorTitle={t("creditInstantane.texte4.colorTitle")}
        Title2={t("creditInstantane.texte4.title2")}
        paragraph={t("creditInstantane.texte4.paragraph")}
        BgColor="text-blue-600"
      />

      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}
export default CréditInstantane