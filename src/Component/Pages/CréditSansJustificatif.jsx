import React from 'react'
import main3 from '../../assets/images/main3.webp'
import Card1Ext from '../Elements/Card1-ext'
import Footer from '../Footer/Footer'
import Infos from '../Elements/Infos'
import Simulateur from '../Elements/Simulateur'
import Contacts from '../Elements/Contacts'
import Texte from '../Elements/Texte'

const CréditSansJustificatif = () => {
  return (
    <div>
      <Card1Ext
        img={main3}
        title="Crédit Sans Justificatif :"
        h2="obtenez des fonds rapidement"
        description="Cette section est dédiée au crédit sans justificatif. Que vous souhaitiez financer un projet personnel, un achat urgent ou toute autre dépense, nous sommes là pour vous accompagner dans vos démarches. N'hésitez pas à nous faire part de vos besoins et de vos attentes."
        bgColor="bg-cyan-600"
      />
      {/* Texte1 */}
      
      <Texte
        Title1="Qu'est-ce qu'un "
        ColorTitle="crédit sans justificatif" 
        paragraph="Le crédit sans justificatif est une solution de financement qui permet d'obtenir des fonds rapidement, sans avoir à fournir de justificatifs de dépenses. Cela le rend particulièrement adapté pour des projets personnels ou des achats urgents."
        BgColor="text-cyan-600"
      />
      <Texte
        Title1="Fonctionnement du "
        ColorTitle="crédit sans justificatif"
        paragraph="Le crédit sans justificatif fonctionne de manière similaire à d'autres types de crédits à la consommation. L'emprunteur fait une demande de crédit, et si elle est approuvée, il reçoit les fonds rapidement, souvent en quelques jours."
        BgColor="text-cyan-600"
      />
      <Texte
        Title1="Avantages du "
        ColorTitle="crédit sans justificatif"
        paragraph="Le principal avantage du crédit sans justificatif est la rapidité et la simplicité du processus. Il n'est pas nécessaire de fournir des documents détaillant l'utilisation des fonds, ce qui permet d'accélérer l'approbation et le versement."
        BgColor="text-cyan-600"
      />
      <Texte
        Title1="Conditions d'obtention du "
        ColorTitle="crédit sans justificatif"
        paragraph="Pour obtenir un crédit sans justificatif, l'emprunteur doit généralement fournir des informations sur sa situation financière, y compris ses revenus et ses dépenses. Les conditions varient selon les prêteurs."
        BgColor="text-cyan-600"
      />

      <Simulateur/>
      <Contacts/>
      <Infos/>
      <Footer/>
    </div>
  )
}
      
export default CréditSansJustificatif
