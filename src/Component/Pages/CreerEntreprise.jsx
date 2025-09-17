import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import business2 from '../../assets/images/business2.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const CreerEntreprise = () => {

  const {t} = useTranslation();
  return (
    <div>
      <Card1Ext
        img={business2}
        title={t("creerEntreprise.card.title")}
        h2={t("creerEntreprise.card.h2")}
        description={t("creerEntreprise.card.description")}
        bgColor="bg-cyan-400"
      />

      <Texte Title1={t("creerEntreprise.texte1.title1")} ColorTitle={t("creerEntreprise.texte1.colorTitle")} paragraph={t("creerEntreprise.texte1.paragraph")} BgColor="text-cyan-400" />
      <Texte Title1={t("creerEntreprise.texte2.title1")} ColorTitle={t("creerEntreprise.texte2.colorTitle")} paragraph={t("creerEntreprise.texte2.paragraph")} BgColor="text-cyan-400" />
      <Texte Title1={t("creerEntreprise.texte3.title1")} ColorTitle={t("creerEntreprise.texte3.colorTitle")} paragraph={t("creerEntreprise.texte3.paragraph")} BgColor="text-cyan-400" />
      
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default CreerEntreprise
