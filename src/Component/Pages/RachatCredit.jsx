import React from 'react'
import main1 from '../../assets/images/main1.webp'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const RachatCrédit = () => {

  const {t} = useTranslation();
  return (
    <div>
     <Card1Ext
        img={main1}
        title={t("rachatCredit.card.title")}
        h2={t("rachatCredit.card.h2")}
        description={t("rachatCredit.card.description")}
        bgColor="bg-blue-600"
      />

      <Texte Title1={t("rachatCredit.texte1.title1")} ColorTitle={t("rachatCredit.texte1.colorTitle")} paragraph={t("rachatCredit.texte1.paragraph")} BgColor="text-blue-600" />
      <Texte Title1={t("rachatCredit.texte2.title1")} ColorTitle={t("rachatCredit.texte2.colorTitle")} paragraph={t("rachatCredit.texte2.paragraph")} BgColor="text-blue-600" />
      <Texte Title1={t("rachatCredit.texte3.title1")} ColorTitle={t("rachatCredit.texte3.colorTitle")} paragraph={t("rachatCredit.texte3.paragraph")} BgColor="text-blue-600" />
      
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}
     
export default RachatCrédit
