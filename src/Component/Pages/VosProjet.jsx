import React from 'react'
import projet from '../../assets/images/projet.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'


const VosProjet = () => {
  return (
    <div>
      <Card1Ext
        img={projet}
        title="Vos Projets :"
        h2="réalisez vos ambitions"
        description="Cette section est dédiée à vos projets. Que vous souhaitiez réaliser des travaux, acheter un véhicule ou financer un voyage, nous sommes là pour vous accompagner dans vos démarches. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-yellow-500"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour les projets */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="prêt projet ?"
        paragraph="Le prêt projet est une solution de financement spécialement conçue pour aider les particuliers à réaliser leurs projets. Il peut couvrir des dépenses liées à des travaux, à l'achat d'un véhicule ou à un voyage."
        BgColor="text-yellow-500"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="prêt projet ?"
        paragraph="Choisir un prêt projet présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer son projet, d'alléger la charge financière et de bénéficier de conditions de remboursement flexibles."
        BgColor="text-yellow-500"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="prêt projet ?"
        paragraph="Pour obtenir un prêt projet, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le projet, les besoins financiers et les garanties éventuelles."
        BgColor="text-yellow-500"
      />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default VosProjet

   
