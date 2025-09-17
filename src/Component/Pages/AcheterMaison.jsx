import React from 'react';
import { useTranslation } from 'react-i18next';
import Card1Ext from '../Elements/Card1-ext';
import maison2 from '../../assets/images/maison2.jpeg';
import Footer from '../Footer/Footer';
import Infos from '../Elements/Infos';
import Texte from '../Elements/Texte';
import Contacts from '../Elements/Contacts';
import Simulateur from '../Elements/Simulateur';

const AcheterMaison = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card1Ext
        img={maison2}
        title={t("acheterMaison.card.title")}
        h2={t("acheterMaison.card.h2")}
        description={t("acheterMaison.card.description")}
        bgColor="bg-green-600"
      />

      <Texte
        Title1={t("acheterMaison.texte1.title1")}
        ColorTitle={t("acheterMaison.texte1.colorTitle")}
        paragraph={t("acheterMaison.texte1.paragraph")}
        BgColor="text-green-600"
      />

      <Texte
        Title1={t("acheterMaison.texte2.title1")}
        ColorTitle={t("acheterMaison.texte2.colorTitle")}
        paragraph={t("acheterMaison.texte2.paragraph")}
        BgColor="text-green-600"
      />

      <Texte
        Title1={t("acheterMaison.texte3.title1")}
        ColorTitle={t("acheterMaison.texte3.colorTitle")}
        paragraph={t("acheterMaison.texte3.paragraph")}
        BgColor="text-green-600"
      />

      <Texte
        Title1={t("acheterMaison.texte4.title1")}
        ColorTitle={t("acheterMaison.texte4.colorTitle")}
        paragraph={t("acheterMaison.texte4.paragraph")}
        BgColor="text-green-600"
      />

      <Simulateur />
      <Contacts />
      <Infos />
      <Footer />
    </div>
  );
};

export default AcheterMaison;
