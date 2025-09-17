import React from 'react'
import voyage2 from '../../assets/images/voyage2.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Texte from '../Elements/Texte'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'

const FaireVoyage = () => {
  return (
    <div>
      
      <Card1Ext
        img={voyage2}
        title="Faire un Voyage :"
        h2="réalisez vos rêves d'évasion"
        description="Cette section est dédiée à votre projet de voyage. Que vous souhaitiez partir en vacances, organiser un voyage d'affaires ou découvrir de nouvelles destinations, nous sommes là pour vous accompagner dans vos démarches de financement. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-indigo-600"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour les voyages */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="crédit voyage ?"
        paragraph="Le crédit voyage est une solution de financement spécialement conçue pour aider les voyageurs à réaliser leurs projets d'évasion. Il peut couvrir les frais de transport, d'hébergement, de restauration et d'activités sur place."
        BgColor="text-indigo-600"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="crédit voyage ?"
        paragraph="Choisir un crédit voyage présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer ses projets d'évasion, d'alléger la charge financière pendant la préparation du voyage et de bénéficier de conditions de remboursement flexibles."
        BgColor="text-indigo-600"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="crédit voyage ?"
        paragraph="Pour obtenir un crédit voyage, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le projet de voyage, les besoins financiers et les garanties éventuelles."
        BgColor="text-indigo-600"
      />
      <Simulateur/>
      <Contacts/>

      <Infos/>
      <Footer/>
      
    </div>
  )
}

export default FaireVoyage
