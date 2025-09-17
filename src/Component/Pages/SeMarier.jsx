import React from 'react'
import mariage3 from '../../assets/images/mariage3.jpeg'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'


const SeMarier = () => {
  return (
    <div>
      <Card1Ext
        img={mariage3}
        title="Se Marier :"
        h2="célébrez votre amour"
        description="Cette section est dédiée à votre projet de mariage. Que vous souhaitiez organiser une cérémonie intime ou une grande réception, nous sommes là pour vous accompagner dans vos démarches de financement. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-pink-600"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour les mariages */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="prêt mariage ?"
        paragraph="Le prêt mariage est une solution de financement spécialement conçue pour aider les couples à réaliser leur projet de mariage. Il peut couvrir les frais liés à l'organisation de la cérémonie, à la location de la salle, à la décoration, à la photographie, et bien plus encore."
        BgColor="text-pink-600"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="prêt mariage ?"
        paragraph="Choisir un prêt mariage présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer son mariage, d'alléger la charge financière et de bénéficier de conditions de remboursement flexibles."
        BgColor="text-pink-600"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="prêt mariage ?"
        paragraph="Pour obtenir un prêt mariage, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le projet de mariage, les besoins financiers et les garanties éventuelles."
        BgColor="text-pink-600"
      />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

     

export default SeMarier
