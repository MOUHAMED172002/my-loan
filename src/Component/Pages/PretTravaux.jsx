import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import travaux from '../../assets/images/travaux.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'


const PretTravaux = () => {

  const {t} = useTranslation();
  return (
    <div>
      <Card1Ext
        img={travaux}
        title={t("creditTravaux.card.title")}
        h2={t("creditTravaux.card.h2")}
        description={t("creditTravaux.card.description")}
        bgColor="bg-gray-400"
      />

      <Texte Title1={t("creditTravaux.texte1.title1")} ColorTitle={t("creditTravaux.texte1.colorTitle")} paragraph={t("creditTravaux.texte1.paragraph")} BgColor="text-gray-400" />
      <Texte Title1={t("creditTravaux.texte2.title1")} ColorTitle={t("creditTravaux.texte2.colorTitle")} paragraph={t("creditTravaux.texte2.paragraph")} BgColor="text-gray-400" />
      <Texte Title1={t("creditTravaux.texte3.title1")} ColorTitle={t("creditTravaux.texte3.colorTitle")} paragraph={t("creditTravaux.texte3.paragraph")} BgColor="text-gray-400" />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

       

export default PretTravaux
