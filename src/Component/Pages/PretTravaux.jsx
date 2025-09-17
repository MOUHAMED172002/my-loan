import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import travaux from '../../assets/images/travaux.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'


const PretTravaux = () => {
  return (
    <div>
      <Card1Ext
        img={travaux}
        title="Prêt Travaux :"
        h2="financer vos projets de rénovation"
        description="Cette section est dédiée à votre projet de travaux. Que vous souhaitiez rénover votre maison, améliorer son efficacité énergétique ou réaliser des agrandissements, nous sommes là pour vous accompagner dans vos démarches de financement. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-gray-600"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour les prêts travaux */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="prêt travaux ?"
        paragraph="Le prêt travaux est une solution de financement spécialement conçue pour aider les propriétaires à réaliser des travaux de rénovation, d'amélioration ou d'agrandissement de leur logement. Il peut couvrir les frais de matériaux, de main-d'œuvre et d'autres dépenses liées aux travaux."
        BgColor="text-gray-600"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="prêt travaux ?"
        paragraph="Choisir un prêt travaux présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer ses projets de rénovation, d'améliorer la valeur de son bien immobilier et de bénéficier de conditions de remboursement flexibles."
        BgColor="text-gray-600"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="prêt travaux ?"
        paragraph="Pour obtenir un prêt travaux, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le projet de travaux, les besoins financiers et les garanties éventuelles."
        BgColor="text-gray-600"
      />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

       

export default PretTravaux
