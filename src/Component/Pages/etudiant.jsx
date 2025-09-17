import React from 'react'
import Card1Ext from '../Elements/Card1-ext'
import etudiant from '../../assets/images/etudiant.jpeg'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Contacts from '../Elements/Contacts'
import Simulateur from '../Elements/Simulateur'
import Texte from '../Elements/Texte'

const Etudiant = () => {
  return (
    <div>
          <Card1Ext
            img={etudiant}
            title="Prêt Étudiant :"
            h2="financer vos études"
            description="Le prêt étudiant est une solution de financement spécialement conçue pour les étudiants. Il vous permet de couvrir vos frais de scolarité, vos dépenses de vie et d'autres coûts liés à vos études. Avec des conditions avantageuses et des taux d'intérêt compétitifs, ce prêt vous aide à vous concentrer sur vos études sans vous soucier de vos finances."
            bgColor="bg-purple-600"
          />
          {/* Texte1 */}
          {/* Présentation de crédit pour les étudiants */}
          <Texte
            Title1="Qu'est-ce que le "
            ColorTitle="prêt étudiant ?"
            paragraph="Le prêt étudiant est une solution de financement spécialement conçue pour aider les étudiants à couvrir leurs frais de scolarité, leurs dépenses de vie et d'autres coûts liés à leurs études. Il peut prendre la forme de prêts à taux réduit, de bourses ou d'autres dispositifs d'aide financière."
            BgColor="text-purple-600"
          />
          <Texte
            Title1="Pourquoi choisir un "
            ColorTitle="prêt étudiant ?"
            paragraph="Choisir un prêt étudiant présente plusieurs avantages. Il permet de disposer des fonds nécessaires pour financer ses études, d'alléger la charge financière pendant la période d'apprentissage et de bénéficier de conditions de remboursement flexibles."
            BgColor="text-purple-600"
          />
          <Texte
            Title1="Comment obtenir un "
            ColorTitle="prêt étudiant ?"
            paragraph="Pour obtenir un prêt étudiant, il est généralement nécessaire de présenter un dossier solide comprenant des informations sur le cursus, les besoins financiers et les garanties éventuelles."
            BgColor="text-purple-600"
          />
          <Simulateur/>
          <Contacts/>
          <Infos/>
          <Footer/>
    </div>
  )
}

export default Etudiant

   
