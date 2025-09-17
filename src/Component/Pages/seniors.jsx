import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import express from '../../assets/images/express.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const Seniors = () => {

  const {t} = useTranslation();
  return (
    <div>
      <Card1Ext
        img={express}
        title={t("senior.card.title")}
        h2={t("senior.card.h2")}
        description={t("senior.card.description")}
        bgColor="bg-blue-500"
      />

      <Texte Title1={t("senior.texte1.title1")} ColorTitle={t("senior.texte1.colorTitle")} paragraph={t("senior.texte1.paragraph")} BgColor="text-blue-500" />
      <Texte Title1={t("senior.texte2.title1")} ColorTitle={t("senior.texte2.colorTitle")} paragraph={t("senior.texte2.paragraph")} BgColor="text-blue-500" />
      <Texte Title1={t("senior.texte3.title1")} ColorTitle={t("senior.texte3.colorTitle")} paragraph={t("senior.texte3.paragraph")} BgColor="text-blue-500" />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default Seniors

    