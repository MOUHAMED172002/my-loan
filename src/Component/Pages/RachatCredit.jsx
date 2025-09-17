import React from 'react'
import main1 from '../../assets/images/main1.webp'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'

const RachatCrédit = () => {
  return (
    <div>
      <Card1Ext
        img={main1}
        title="Rachat de Crédit :"
        h2="simplifiez vos finances"
        description="Cette section est dédiée au rachat de crédit. Que vous souhaitiez regrouper vos prêts pour alléger vos mensualités ou bénéficier d'un meilleur taux, nous sommes là pour vous accompagner dans vos démarches. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-blue-600"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour le rachat de crédit */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="rachat de crédit ?"
        paragraph="Le rachat de crédit est une opération financière qui consiste à regrouper plusieurs prêts en un seul, afin de simplifier la gestion de ses finances et de réduire le montant des mensualités."
        BgColor="text-blue-600"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="rachat de crédit ?"
        paragraph="Choisir un rachat de crédit présente plusieurs avantages. Il permet de réduire le montant des mensualités, de bénéficier d'un meilleur taux d'intérêt et de simplifier la gestion de ses finances."
        BgColor="text-blue-600"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="rachat de crédit ?"
        paragraph="Pour obtenir un rachat de crédit, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur les prêts à regrouper, les besoins financiers et les garanties éventuelles."
        BgColor="text-blue-600"
      />
      
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}
     
export default RachatCrédit
