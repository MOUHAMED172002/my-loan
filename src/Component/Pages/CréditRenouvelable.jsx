import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import card5 from '../../assets/images/card5.png'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'

const CréditRenouvelable = () => {
  return (
    <div>
          <Card1Ext
            img={card5}
            title="Crédit Renouvelable :"
            h2="une solution de financement flexible"
            description="Le crédit renouvelable est une solution de financement flexible qui permet d'accéder à des fonds à tout moment, dans la limite d'un montant prédéfini. Il fonctionne comme une réserve d'argent que l'emprunteur peut utiliser selon ses besoins, avec des remboursements adaptés à sa situation financière. Cette option est idéale pour les projets nécessitant une certaine souplesse dans le financement."
            bgColor="bg-teal-600"
          />
           {/* Texte1 */}
           <Texte ColorTitle={"Qu'est-ce que "} Title2={"le crédit renouvelable ?"} paragraph={"Le crédit renouvelable est une forme de crédit qui permet à l'emprunteur de disposer d'une réserve d'argent qu'il peut utiliser à tout moment, dans la limite d'un montant défini à l'avance."} BgColor={'text-teal-600'} />
            <Texte Title1={"Fonctionnement du "} ColorTitle={"crédit renouvelable"} paragraph={"Le crédit renouvelable fonctionne comme une réserve d'argent que l'emprunteur peut utiliser selon ses besoins. Lorsqu'il utilise une partie de cette réserve, il doit rembourser le montant utilisé, avec des intérêts calculés sur le montant emprunté."} BgColor={"text-teal-600"} />
            <Texte Title1={"Avantages du "} ColorTitle={'crédit renouvelable'} paragraph={"Le crédit renouvelable offre une grande flexibilité, car l'emprunteur peut utiliser les fonds selon ses besoins et rembourser à son rythme. De plus, il permet de faire face à des dépenses imprévues ou de financer des projets à court terme."} BgColor={'text-teal-600'}/>

            <Texte ColorTitle={"Conditions d'obtention du "} Title2={"crédit renouvelable"}  paragraph={"Pour obtenir un crédit renouvelable, l'emprunteur doit généralement fournir des informations sur sa situation financière, y compris ses revenus et ses dépenses. Les conditions varient selon les prêteurs."} BgColor={'text-teal-600'} />
            
          {/* Simulateur */}
          <Simulateur/>
          <Contacts/>
          <Infos/>
          <Footer/>
    </div>
  )
}

export default CréditRenouvelable

 