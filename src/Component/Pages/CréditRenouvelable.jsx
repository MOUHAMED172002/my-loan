import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import card5 from '../../assets/images/card5.png'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const CréditRenouvelable = () => {
  const {t} = useTranslation();
  return (
    <div>
          <Card1Ext
        img={card5}
        title={t("creditRenouvelable.card.title")}
        h2={t("creditRenouvelable.card.h2")}
        description={t("creditRenouvelable.card.description")}
        bgColor="bg-teal-600"
      />

      <Texte 
        Title1={t("creditRenouvelable.texte1.title1")} 
        ColorTitle={t("creditRenouvelable.texte1.colorTitle")} 
        paragraph={t("creditRenouvelable.texte1.paragraph")} 
        BgColor="text-teal-600" 
      />

      <Texte 
        Title1={t("creditRenouvelable.texte2.title1")} 
        ColorTitle={t("creditRenouvelable.texte2.colorTitle")} 
        Title2={t("creditRenouvelable.texte2.title2")}
        paragraph={t("creditRenouvelable.texte2.paragraph")} 
        BgColor="text-teal-600" 
      />

      <Texte 
        Title1={t("creditRenouvelable.texte3.title1")} 
        ColorTitle={t("creditRenouvelable.texte3.colorTitle")} 
        paragraph={t("creditRenouvelable.texte3.paragraph")} 
        BgColor="text-teal-600" 
      />

      <Texte 
        Title1={t("creditRenouvelable.texte4.title1")} 
        ColorTitle={t("creditRenouvelable.texte4.colorTitle")} 
        Title2={t("creditRenouvelable.texte4.title2")}
        paragraph={t("creditRenouvelable.texte4.paragraph")} 
        BgColor="text-teal-600" 
      />
            
          {/* Simulateur */}
          <Simulateur/>
          <Contacts/>
          <Infos/>
          <Footer/>
    </div>
  )
}

export default CréditRenouvelable

 