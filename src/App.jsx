import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Badges from './Component/Badges/Badges'
import Catégories from './Component/Catégories/Catégories'
import Clearfix from './Component/Clearfix/Clearfix'
import Logue from './Component/Logue/Logue'
import Témoignage from './Component/Témoignage/Témoignage'
import Compteur from './Component/Compteur/Compteur'
import Footer from './Component/Footer/Footer'

// Pages
import CreditExpress from './Component/Pages/CréditExpress'
import CreditInstantane from './Component/Pages/CréditInstantane'
import CreditSansJustificatif from './Component/Pages/CréditSansJustificatif'
import CreditRenouvelable from './Component/Pages/CréditRenouvelable'
import RachatCredit from './Component/Pages/RachatCredit'
import PretPersonnel from './Component/Pages/PretPersonnel'
import PretTravaux from './Component/Pages/PretTravaux'
import CreditAuto from './Component/Pages/CreditAuto'
import BesoinFinancement from './Component/Pages/BesoinFinancement'
import VosProjet from './Component/Pages/VosProjet'
import SeMarier from './Component/Pages/SeMarier'
import FaireVoyage from './Component/Pages/FaireVoyage'
import AcheterMaison from './Component/Pages/AcheterMaison'
import CreerEntreprise from './Component/Pages/CreerEntreprise'
import Etudiant from './Component/Pages/Etudiant'
import Seniors from './Component/Pages/Seniors'

const App = () => {
  const { t } = useTranslation()

  const menu = [
    {
      label: t("translation.menu.creditExpress"),
      path: '/credit-express',
      element: <CreditExpress />,
      children: [
        { label: t("translation.menu.creditInstantane"), path: '/credit-express/credit-instantane', element: <CreditInstantane /> },
        { label: t("translation.menu.creditSansJustificatif"), path: '/credit-express/credit-sans-justificatif', element: <CreditSansJustificatif /> },
        { label: t("translation.menu.creditRenouvelable"), path: '/credit-express/credit-renouvelable', element: <CreditRenouvelable /> },
        { label: t("translation.menu.rachatCredit"), path: '/credit-express/rachat-credit', element: <RachatCredit /> },
      ],
    },
    {
      label: t("translation.menu.pretPersonnel"),
      path: '/pret-personnel',
      element: <PretPersonnel />,
      children: [
        { label: t("translation.menu.pretTravaux"), path: '/pret-personnel/pret-travaux', element: <PretTravaux /> },
        { label: t("translation.menu.creditAuto"), path: '/pret-personnel/credit-auto', element: <CreditAuto /> },
        { label: t("translation.menu.besoinFinancement"), path: '/pret-personnel/besoin-financement', element: <BesoinFinancement /> },
      ],
    },
    {
      label: t("translation.menu.vosProjet"),
      path: '/vos-projet',
      element: <VosProjet />,
      children: [
        { label: t("translation.menu.seMarier"), path: '/vos-projet/se-marier', element: <SeMarier /> },
        { label: t("translation.menu.faireVoyage"), path: '/vos-projet/faire-voyage', element: <FaireVoyage /> },
        { label: t("translation.menu.acheterMaison"), path: '/vos-projet/acheter-maison', element: <AcheterMaison /> },
        { label: t("translation.menu.creerEntreprise"), path: '/vos-projet/creer-entreprise', element: <CreerEntreprise /> },
        { label: t("translation.menu.etudiant"), path: '/vos-projet/etudiant', element: <Etudiant /> },
        { label: t("translation.menu.seniors"), path: '/vos-projet/seniors', element: <Seniors /> },
      ],
    },
  ]

  return (
    <Router>
      <div className='bg-gray-100 min-h-screen text-black'>
        <Navbar menu={menu} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Badges />
              <Catégories />
              <Clearfix />
              <Logue />
              <Témoignage />
              <Compteur />
              <Footer />
            </>
          } />

          {/* Routes principales */}
          {menu.map(item => (
            <Route
              key={item.path}
              path={item.path}
              element={item.element}
            />
          ))}

          {/* Routes enfants */}
          {menu.flatMap(item =>
            item.children.map(child => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))
          )}
        </Routes>
      </div>
    </Router>
  )
}

export default App
