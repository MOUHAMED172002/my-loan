import React from 'react'
import mariage3 from '../../assets/images/mariage3.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'


const SeMarier = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Card1Ext
        img={mariage3}
        title={t("mariage.card.title")}
        h2={t("mariage.card.h2")}
        description={t("mariage.card.description")}
        bgColor="bg-pink-600"
      />

      <Texte Title1={t("mariage.texte1.title1")} ColorTitle={t("mariage.texte1.colorTitle")} paragraph={t("mariage.texte1.paragraph")} BgColor="text-pink-600" />
      <Texte Title1={t("mariage.texte2.title1")} ColorTitle={t("mariage.texte2.colorTitle")} paragraph={t("mariage.texte2.paragraph")} BgColor="text-pink-600" />
      <Texte Title1={t("mariage.texte3.title1")} ColorTitle={t("mariage.texte3.colorTitle")} paragraph={t("mariage.texte3.paragraph")} BgColor="text-pink-600" />
      
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

     

export default SeMarier
