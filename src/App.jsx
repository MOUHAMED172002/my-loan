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

const menu = [
	{
		label: 'Crédit Express',
		path: '/credit-express',
		children: [
			{ label: 'Crédit Instantané', path: '/credit-express/credit-instantane' },
			{ label: 'Crédit Sans Justificatif', path: '/credit-express/credit-sans-justificatif' },
			{ label: 'Crédit Renouvelable', path: '/credit-express/credit-renouvelable' },
			{ label: 'Rachat Crédit', path: '/credit-express/rachat-credit' },
		],
	},
	{
		label: 'Prêt Personnel',
		path: '/pret-personnel',
		children: [
			{ label: 'Prêt Travaux', path: '/pret-personnel/pret-travaux' },
			{ label: 'Crédit Auto', path: '/pret-personnel/credit-auto' },
			{ label: 'Besoin de Financement', path: '/pret-personnel/besoin-financement' },
		],
	},
	{
		label: 'Vos projet',
		path: '/vos-projet',
		children: [
			{ label: 'Se marier', path: '/vos-projet/se-marier' },
			{ label: 'Faire un voyage', path: '/vos-projet/faire-voyage' },
			{ label: 'Acheter une maison', path: '/vos-projet/acheter-maison' },
			{ label: 'Créer une entreprise', path: '/vos-projet/creer-entreprise' },
			{ label: 'Etudiant', path: '/vos-projet/etudiant' },
			{ label: 'Seniors', path: '/vos-projet/seniors' },
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
							element={<Page title={item.label} />}
						/>
					))}
					{/* Route pour chaque sous-élément */}
					{menu.flatMap(item =>
						item.children.map(child => (
							<Route
								key={child.path}
								path={child.path}
								element={<Page title={child.label} />}
							/>
						))
					)}
				</Routes>
			</div>
		</Router>
	)
}

export default App
