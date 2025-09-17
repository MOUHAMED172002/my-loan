import React from 'react'
import Card1Ext from '../Elements/Card1-ext';
import instance from '../../assets/images/instance.jpeg'
import Footer from '../Footer/Footer';
import Infos from '../Elements/Infos';
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'

const CréditInstantane = () => {
  return (
    <div>
          <Card1Ext
            img={instance}
            title="Crédit Instantané :"
            h2="obtenez des fonds rapidement"
            description="Le crédit instantané est une solution de financement qui vous permet d'obtenir des fonds rapidement, sans les délais habituels des banques traditionnelles. Que ce soit pour un projet urgent ou une dépense imprévue, ce type de prêt est conçu pour répondre à vos besoins de trésorerie immédiats."
            bgColor="bg-indigo-600"
          />

             <Texte Title1={"Qu'est-ce que le "} ColorTitle={"crédit instantané ?"} paragraph={"Le crédit instantané fait partie de la famille du crédit à la consommation mais se différencie par sa rapidité d'exécution et ses formalités simplifiées. Contrairement aux crédits traditionnels, le crédit instantané en ligne offre des taux annuels attractifs et un suivi de votre dossier en temps réel en ligne via mails ou SMS, ce qui fait de lui une solution idéale en cas d'imprévus. "} BgColor={"text-blue-600"} />

          {/* Texte2 */}
          <Texte Title1={""} ColorTitle={"À qui s'adresse "} Title2={"le crédit instantané ?"} paragraph={"Le crédit instantané est destiné aux personnes majeures, dont la résidence fiscale est en France, manifestant un besoin d'argent dans des délais rapides. Les organismes qui le proposent sont de plus en plus nombreux et s'adressent à tous les profils de consommateurs. Pourtant, tous ces organismes ne se valent pas et il est parfois plus avantageux de passer par un comparateur de crédit au préalable, qui dresse un comparatif des différentes offres de crédit en ligne et vous soumettre instantanément les plus avantageuses."} BgColor={"text-blue-600"} />
          {/* Texte3 */}

          <Texte Title1={"Combien de temps faut-il pour"} ColorTitle={"le déblocage des fonds ?"}  paragraph={"L'un des avantages majeurs du crédit instantané en ligne est le déblocage rapide des fonds. En effet, après l'accord de principe, il ne faut généralement plus de 48h pour recevoir le versement des fonds sur son compte, ainsi que le délai légal de rétractation, le cas échéant. Le déblocage de temps se fait donc en un minimum de temps, dans certains cas il est immédiat. Cela fait du crédit instantané une solution idéale pour les besoins urgents, sans avoir à se justifier sur l'utilisation des fonds.De plus, il est possible de procéder à un remboursement anticipé en profitant de pénalités réduites, ce qui n'est pas le cas de certains organismes financiers. Cela représente un avantage considérable qui s'applique à tous les types de crédits rapides, tant aux petits montants (micro crédit instantané) comme aux plus gros montants (crédit instantané). "} BgColor={"text-blue-600"} />

          {/* Texte4 */}

          <Texte Title1={""} ColorTitle={"Pourquoi faire une demande "} Title2={"de crédit instantané ?"} paragraph={"L'avantage du crédit instantané est qu'il est accessible au plus grand nombre. Contracter un crédit instantané en ligne est envisageable par toute personne qui a un besoin de trésorerie dans un délais court, quel qu'en soit le motif : effectuer des travaux dans son logement, acheter un nouveau véhicule, des billets d'avion, ou encore obtenir une réserve d'argent pour faire face à des dépenses imprévus, ce crédit rapide présente des points forts intéressants.En effet, ce dernier permet de réaliser rapidement ses projets, qu'il s'agisse de rénover son logement, partir en vacances, ou célébrer un événement important. L'avantage avec ce type de prêt c'est que vous pouvez faire votre demande de crédit en quelques clics. Le point fort du prêt instantané est donc sa rapidité et simplicité. "} BgColor={"text-blue-600"} />
          <Simulateur/>
          <Contacts/>
          <Infos/>
          <Footer/>
    </div>
  )
}

export default CréditInstantane

  