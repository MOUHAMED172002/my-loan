import React from 'react'
import voyage2 from '../../assets/images/voyage2.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Texte from '../Elements/Texte'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import { useTranslation } from 'react-i18next'

const FaireVoyage = () => {
  const {t} =useTranslation();
  return (
    <div>
      
     <Card1Ext
        img={voyage2}
        title={t("creditVoyage.card.title")}
        h2={t("creditVoyage.card.h2")}
        description={t("creditVoyage.card.description")}
        bgColor="bg-indigo-400"
      />

      <Texte Title1={t("creditVoyage.texte1.title1")} ColorTitle={t("creditVoyage.texte1.colorTitle")} paragraph={t("creditVoyage.texte1.paragraph")} BgColor="text-indigo-400" />
      <Texte Title1={t("creditVoyage.texte2.title1")} ColorTitle={t("creditVoyage.texte2.colorTitle")} paragraph={t("creditVoyage.texte2.paragraph")} BgColor="text-indigo-400" />
      <Texte Title1={t("creditVoyage.texte3.title1")} ColorTitle={t("creditVoyage.texte3.colorTitle")} paragraph={t("creditVoyage.texte3.paragraph")} BgColor="text-indigo-400" />
      <Simulateur/>
      <Contacts/>

      <Infos/>
      <Footer/>
      
    </div>
  )
}

export default FaireVoyage
