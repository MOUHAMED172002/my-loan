import React from 'react'
import main3 from '../../assets/images/main3.webp'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'
import { useTranslation } from 'react-i18next'

const CréditSansJustificatif = () => {

  const {t} = useTranslation();
  return (
    <div>
     <Card1Ext
        img={main3}
        title={t("creditSansJustificatif.card.title")}
        h2={t("card.h2")}
        description={t("creditSansJustificatif.card.description")}
        bgColor="bg-cyan-400"
      />

      <Texte Title1={t("creditSansJustificatif.texte1.title1")} ColorTitle={t("creditSansJustificatif.texte1.colorTitle")} paragraph={t("creditSansJustificatif.texte1.paragraph")} BgColor="text-cyan-400" />
      <Texte Title1={t("creditSansJustificatif.texte2.title1")} ColorTitle={t("creditSansJustificatif.texte2.colorTitle")} paragraph={t("creditSansJustificatif.texte2.paragraph")} BgColor="text-cyan-400" />
      <Texte Title1={t("creditSansJustificatif.texte3.title1")} ColorTitle={t("creditSansJustificatif.texte3.colorTitle")} paragraph={t("creditSansJustificatif.texte3.paragraph")} BgColor="text-cyan-400" />
      <Texte Title1={t("creditSansJustificatif.texte4.title1")} ColorTitle={t("creditSansJustificatif.texte4.colorTitle")} paragraph={t("creditSansJustificatif.texte4.paragraph")} BgColor="text-cyan-400" />

      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}
      
export default CréditSansJustificatif
