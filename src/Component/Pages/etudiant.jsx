import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import etudiant from '../../assets/images/etudiant.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const Etudiant = () => {
  const {t} = useTranslation();
  return (
    <div>
          <Card1Ext
        img={etudiant}
        title={t("pretEtudiant.card.title")}
        h2={t("pretEtudiant.card.h2")}
        description={t("pretEtudiant.card.description")}
        bgColor="bg-purple-400"
      />

      <Texte Title1={t("pretEtudiant.texte1.title1")} ColorTitle={t("pretEtudiant.texte1.colorTitle")} paragraph={t("pretEtudiant.texte1.paragraph")} BgColor="text-purple-400" />
      <Texte Title1={t("pretEtudiant.texte2.title1")} ColorTitle={t("pretEtudiant.texte2.colorTitle")} paragraph={t("pretEtudiant.texte2.paragraph")} BgColor="text-purple-400" />
      <Texte Title1={t("pretEtudiant.texte3.title1")} ColorTitle={t("pretEtudiant.texte3.colorTitle")} paragraph={t("pretEtudiant.texte3.paragraph")} BgColor="text-purple-400" />
          <Simulateur/>
          <Contacts/>
          <Infos/>
          <Footer/>
    </div>
  )
}

export default Etudiant

   
