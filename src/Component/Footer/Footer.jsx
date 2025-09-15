import React, { useState } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage("Merci pour votre inscription !")
    setEmail("")
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Réseaux */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MyLoan</h2>
          <p className="text-gray-400 mb-4">Votre partenaire pour un crédit rapide, simple et sécurisé.</p>
          <div className="flex gap-3 text-2xl mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-teal-400"><AiFillFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-teal-400"><AiFillInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-teal-400"><AiFillLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-teal-400"><AiFillTwitterCircle /></a>
          </div>
          <a href="#simulateur" className="inline-block bg-amber-300 text-black font-bold rounded-full px-6 py-2 mt-2 hover:bg-amber-400 transition">Je demande un crédit</a>
        </div>
        {/* Navigation */}
        {/* <div>
          <h3 className="font-bold mb-2">Navigation</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#hero" className="hover:text-teal-400">Accueil</a></li>
            <li><a href="#categories" className="hover:text-teal-400">Catégories</a></li>
            <li><a href="#simulateur" className="hover:text-teal-400">Simulateur</a></li>
            <li><a href="#temoignages" className="hover:text-teal-400">Témoignages</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div> */}
        {/* Eléments du Navbar */}
        <div>
          <h3 className="font-bold mb-2">Nos offres</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#credit-express" className="hover:text-teal-400">Crédit Express</a></li>
            <li><a href="#pret-personnel" className="hover:text-teal-400">Prêt Personnel</a></li>
            <li><a href="#projets" className="hover:text-teal-400">Vos projets</a></li>
            <li><a href="#rachat-credit" className="hover:text-teal-400">Rachat Crédit</a></li>
            <li><a href="#credit-auto" className="hover:text-teal-400">Crédit Auto</a></li>
          </ul>
        </div>
        {/* À propos de MyLoan */}
        <div>
          <h3 className="font-bold mb-2">À propos</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Entreprise française indépendante</li>
            <li>+300 partenaires bancaires</li>
            <li>Accompagnement personnalisé</li>
            <li>100% digital et sécurisé</li>
            <li>Support client réactif</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-2">Recevez nos actus</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="Votre email"
              className="rounded px-3 py-2 text-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white font-bold rounded py-2 transition">S'inscrire</button>
            {message && <span className="text-green-400 text-sm">{message}</span>}
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyLoan. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
