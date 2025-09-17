import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import auto from '../../assets/images/auto.jpeg'
import Texte from "../Elements/Texte" 
import Simulateur from "../Elements/Simulateur"
import Contacts from "../Elements/Contacts"
import Infos from "../Elements/Infos"
import Footer from "../Footer/Footer"
import { useTranslation } from 'react-i18next'

const CreditAuto = () => {
  const {t} = useTranslation();

  return (
    <div>
      <Card1Ext
        img={auto}
        title={t("crecreditAuto.ditAuto.card.title")}
        h2={t("card.h2")}
        description={t("creditAuto.card.description")}
        bgColor="bg-red-400"
      />

      <Texte Title1={t("creditAuto.texte1.title1")} ColorTitle={t("creditAuto.texte1.colorTitle")} paragraph={t("creditAuto.texte1.paragraph")} BgColor="text-red-400" />
      <Texte Title1={t("creditAuto.texte2.title1")} ColorTitle={t("creditAuto.texte2.colorTitle")} paragraph={t("creditAuto.texte2.paragraph")} BgColor="text-red-400" />
      <Texte Title1={t("creditAuto.texte3.title1")} ColorTitle={t("creditAuto.texte3.colorTitle")} paragraph={t("creditAuto.texte3.paragraph")} BgColor="text-red-400" />

      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default CreditAuto
