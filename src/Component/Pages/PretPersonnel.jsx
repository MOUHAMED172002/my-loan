import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import micro2 from '../../assets/images/micro2.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const PretPersonnel = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Card1Ext
        img={micro2}
        title={t("besoinFinancement.card.title")}
        h2={t("besoinFinancement.card.h2")}
        description={t("besoinFinancement.card.description")}
        bgColor="bg-pink-600"
      />
        {/* Texte1 */}
        {/* Présentation de crédit pour les prêts personnels */}
        <Texte 
        Title1={t("besoinFinancement.texte1.title1")} 
        ColorTitle={t("besoinFinancement.texte1.colorTitle")} 
        paragraph={t("besoinFinancement.texte1.paragraph")} 
        BgColor="text-pink-600" 
      />

      <Texte 
        Title1={t("besoinFinancement.texte2.title1")} 
        ColorTitle={t("besoinFinancement.texte2.colorTitle")} 
        paragraph={t("besoinFinancement.texte2.paragraph")} 
        BgColor="text-pink-600" 
      />

      <Texte 
        Title1={t("besoinFinancement.texte3.title1")} 
        ColorTitle={t("besoinFinancement.texte3.colorTitle")} 
        paragraph={t("besoinFinancement.texte3.paragraph")} 
        BgColor="text-pink-600" 
      />
        <Simulateur/>
        <Contacts/>
        <Infos/>
        <Footer/>
    </div>
  )
}

export default PretPersonnel

   
