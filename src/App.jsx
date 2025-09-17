import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Badges from './Component/Badges/Badges'
import Catégories from './Component/Catégories/Catégories'
import Clearfix from './Component/Clearfix/Clearfix'
import Logue from './Component/Logue/Logue'
import Témoignage from './Component/Témoignage/Témoignage'
import Compteur from './Component/Compteur/Compteur'
import Footer from './Component/Footer/Footer'
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

const menu = [
	{
		label: 'Crédit Express',
		path: '/credit-express',
    element: <CreditExpress  />,
		children: [
			{ label: 'Crédit Instantané', path: '/credit-express/credit-instantane', element: <CreditInstantane /> },
			{ label: 'Crédit Sans Justificatif', path: '/credit-express/credit-sans-justificatif', element: <CreditSansJustificatif /> },
			{ label: 'Crédit Renouvelable', path: '/credit-express/credit-renouvelable', element: <CreditRenouvelable /> },
			{ label: 'Rachat Crédit', path: '/credit-express/rachat-credit', element: <RachatCredit /> },
		],
	},
	{
		label: 'Prêt Personnel',
		path: '/pret-personnel',
    element: <PretPersonnel />,
		children: [
			{ label: 'Prêt Travaux', path: '/pret-personnel/pret-travaux', element: <PretTravaux /> },
			{ label: 'Crédit Auto', path: '/pret-personnel/credit-auto', element: <CreditAuto /> },
			{ label: 'Besoin de Financement', path: '/pret-personnel/besoin-financement', element: <BesoinFinancement /> },
		],
	},
	{
		label: 'Vos projet',
		path: '/vos-projet',
    element: <VosProjet />,
		children: [
			{ label: 'Se marier', path: '/vos-projet/se-marier', element: <SeMarier /> },
			{ label: 'Faire un voyage', path: '/vos-projet/faire-voyage', element: <FaireVoyage /> },
			{ label: 'Acheter une maison', path: '/vos-projet/acheter-maison', element: <AcheterMaison /> },
			{ label: 'Créer une entreprise', path: '/vos-projet/creer-entreprise', element: <CreerEntreprise /> },
			{ label: 'Etudiant', path: '/vos-projet/etudiant', element: <Etudiant /> },
			{ label: 'Seniors', path: '/vos-projet/seniors', element: <Seniors /> },
		],
	},
]

// Exemple de composant pour chaque page
const Page = ({ title }) => (
	<div className="p-8 text-2xl font-bold">{title}</div>
)

const App = () => {
	return (
		<Router>
			<div className='bg-gray-100 min-h-screen text-black'>
				<Navbar menu={menu} />
				<Routes>
					<Route path="/" element={
						<>
							<Hero/>
							<Badges/>
							<Catégories/>
							<Clearfix/>
							<Logue/>
							<Témoignage/>
							<Compteur/>
							<Footer/>
						</>
					} />
					{/* Route pour chaque grand label */}
					{menu.map(item => (
  <Route
    key={item.path}
    path={item.path}
    element={item.element}
  />
))}
					{/* Route pour chaque sous-élément */}
					{menu.flatMap(item =>
						item.children.map(child => (
							<Route
								key={child.path}
								path={child.path}
								element={child.element }
							/>
						))
					)}
				</Routes>
			</div>
		</Router>
	)
}

export default App
