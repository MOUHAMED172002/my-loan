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
  const t = useTranslation

  return (
    <div>
      <Card1Ext
        img={auto}
        title={t("card.title")}
        h2={t("card.h2")}
        description={t("card.description")}
        bgColor="bg-red-400"
      />

      <Texte Title1={t("texte1.title1")} ColorTitle={t("texte1.colorTitle")} paragraph={t("texte1.paragraph")} BgColor="text-red-400" />
      <Texte Title1={t("texte2.title1")} ColorTitle={t("texte2.colorTitle")} paragraph={t("texte2.paragraph")} BgColor="text-red-400" />
      <Texte Title1={t("texte3.title1")} ColorTitle={t("texte3.colorTitle")} paragraph={t("texte3.paragraph")} BgColor="text-red-400" />

      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default CreditAuto
