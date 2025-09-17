import React from 'react'
import card6 from '../../assets/images/card6.png'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const BesoinFinancement = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card1Ext
        img={card6}
        title={t("besoinFinancement.card.title")}
        h2={t("besoinFinancement.card.h2")}
        description={t("besoinFinancement.card.description")}
        bgColor="bg-emerald-600"
      />

      <Texte 
        Title1={t("besoinFinancement.texte1.title1")} 
        ColorTitle={t("besoinFinancement.texte1.colorTitle")} 
        paragraph={t("besoinFinancement.texte1.paragraph")} 
        BgColor="text-emerald-600" 
      />

      <Texte 
        Title1={t("besoinFinancement.texte2.title1")} 
        ColorTitle={t("besoinFinancement.texte2.colorTitle")} 
        paragraph={t("besoinFinancement.texte2.paragraph")} 
        BgColor="text-emerald-600" 
      />

      <Texte 
        Title1={t("besoinFinancement.texte3.title1")} 
        ColorTitle={t("besoinFinancement.texte3.colorTitle")} 
        paragraph={t("besoinFinancement.texte3.paragraph")} 
        BgColor="text-emerald-600" 
      />

      <Simulateur/>       
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default BesoinFinancement
