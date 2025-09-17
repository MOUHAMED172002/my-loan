import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import business2 from '../../assets/images/business2.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'

const CreerEntreprise = () => {
  return (
    <div>
      <Card1Ext
        img={business2}
        title="Créer une Entreprise :"
        h2="donnez vie à votre projet"
        description="Cette section est dédiée à votre projet de création d'entreprise. Que vous souhaitiez lancer une startup, ouvrir un commerce ou développer une activité existante, nous sommes là pour vous accompagner dans vos démarches de financement. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-cyan-600"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour la création d'entreprise */}
      <Texte
        Title1="Qu'est-ce que le "
        ColorTitle="crédit pour la création d'entreprise ?"
        paragraph="Le crédit pour la création d'entreprise est une solution de financement spécialement conçue pour aider les entrepreneurs à lancer leur projet. Il peut prendre la forme de prêts, de subventions ou d'autres dispositifs d'aide financière."
        BgColor="text-cyan-600"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="crédit pour la création d'entreprise ?"
        paragraph="Choisir un crédit pour la création d'entreprise présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour démarrer l'activité, d'investir dans du matériel, de couvrir les frais de fonctionnement initiaux et de renforcer la crédibilité auprès des partenaires et clients."
        BgColor="text-cyan-600"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="crédit pour la création d'entreprise ?"
        paragraph="Pour obtenir un crédit pour la création d'entreprise, il est généralement nécessaire de présenter un dossier solide comprenant un business plan, des prévisions financières et des informations sur l'équipe dirigeante."
        BgColor="text-cyan-600"
      />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default CreerEntreprise
