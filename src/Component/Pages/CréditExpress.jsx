import React from 'react'
import card1 from '../../assets/images/card1.png'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const CréditExpress = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card1Ext
        img={card1}
        title={t("creditExpress.card.title")}
        h2={t("creditExpress.card.h2")}
        description={t("creditExpress.card.description")}
        bgColor="bg-blue-600"
      />

      <Texte 
        Title1={t("creditExpress.texte1.title1")} 
        ColorTitle={t("creditExpress.texte1.colorTitle")} 
        paragraph={t("creditExpress.texte1.paragraph")} 
        BgColor="text-blue-600" 
      />

      <Texte 
        Title1={t("creditExpress.texte2.title1")} 
        ColorTitle={t("creditExpress.texte2.colorTitle")} 
        Title2={t("creditExpress.texte2.title2")}
        paragraph={t("creditExpress.texte2.paragraph")} 
        BgColor="text-blue-600" 
      />

      <Texte 
        Title1={t("creditExpress.texte3.title1")} 
        ColorTitle={t("creditExpress.texte3.colorTitle")} 
        paragraph={t("creditExpress.texte3.paragraph")} 
        BgColor="text-blue-600" 
      />

      <Texte 
        Title1={t("creditExpress.texte4.title1")} 
        ColorTitle={t("creditExpress.texte4.colorTitle")} 
        Title2={t("creditExpress.texte4.title2")}
        paragraph={t("creditExpress.texte4.paragraph")} 
        BgColor="text-blue-600" 
      />

      <Simulateur />
      <Contacts />
      <Infos />
      <Footer />
    </div>
  )
}

export default CréditExpress
