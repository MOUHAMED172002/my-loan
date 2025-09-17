import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import express from '../../assets/images/express.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'

const Seniors = () => {
  return (
    <div>
      <Card1Ext
        img={express}
        title="Seniors :"
        h2="profitez de nos offres"
        description="Cette section est dédiée aux seniors. Que vous souhaitiez financer un projet de retraite, un voyage ou toute autre dépense, nous sommes là pour vous accompagner dans vos démarches de financement. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-blue-500"
      />
      {/* Texte1 */}
      {/* Présentation de crédit pour les seniors */}
      <Texte 
        Title1="Qu'est-ce que le "
        ColorTitle="prêt senior ?"
        paragraph="Le prêt senior est une solution de financement spécialement conçue pour aider les personnes âgées à réaliser leurs projets. Il peut couvrir des dépenses liées à la santé, à la maison ou à des loisirs."
        BgColor="text-blue-500"
      />
      <Texte
        Title1="Pourquoi choisir un "
        ColorTitle="prêt senior ?"
        paragraph="Choisir un prêt senior présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer ses projets, d'alléger la charge financière et de bénéficier de conditions de remboursement flexibles."
        BgColor="text-blue-500"
      />
      <Texte
        Title1="Comment obtenir un "
        ColorTitle="prêt senior ?"
        paragraph="Pour obtenir un prêt senior, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le projet, les besoins financiers et les garanties éventuelles."
        BgColor="text-blue-500"
      />
      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}

export default Seniors

    