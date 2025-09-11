import React from 'react'
import Title from '../Utilitaires/Title'
import Step from '../Utilitaires/Step'
import Etape1 from './Etape1'

const Clearfix  = () => {
  return (
    <div>
        <div>
            <Title Title1={'Le'} ColorTitle={"réflexe"} Title2={'qui facilite votre crédit'} paragraph={"Notre technologie propriétaire permet d'analyser en temps réel l'éligibilité de votre demande de crédit en fonction des critères de nos 300+  partenaires, prêteur et organismes de crédit en ligne. Moins d'étapes, de formulaires et d'intérmédiaires : Youdge centralise toutes vos démarches en quelques clics ! Découvrez les différents types de crédits rapides et trouvez celui qui vous correspond."} />

            <Step/>
            <Etape1/>
        </div>
    </div>
  )
}

export default Clearfix
