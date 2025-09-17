import React from 'react'
import projet from '../../assets/images/projet.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'


const VosProjet = () => {

  const {t} = useTranslation();
  return (
    <div>
       <Card1Ext
        img={projet}
        title={t("projet.card.title")}
        h2={t("projet.card.h2")}
        description={t("projet.card.description")}
        bgColor="bg-yellow-500"
      />

      <Texte Title1={t("projet.texte1.title1")} ColorTitle={t("projet.texte1.colorTitle")} paragraph={t("projet.texte1.paragraph")} BgColor="text-yellow-500" />
      <Texte Title1={t("projet.texte2.title1")} ColorTitle={t("projet.texte2.colorTitle")} paragraph={t("projet.texte2.paragraph")} BgColor="text-yellow-500" />
      <Texte Title1={t("projet.texte3.title1")} ColorTitle={t("projet.texte3.colorTitle")} paragraph={t("projet.texte3.paragraph")} BgColor="text-yellow-500" />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default VosProjet

   
