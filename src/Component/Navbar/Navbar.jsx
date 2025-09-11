import React from 'react'

const Navbar = () => {
  return (
    <div>
                    <div className="navbar bg-gray-100 shadow-sm text-black z-50 relative">
                    
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                    <li>
                    <a className="font-bold hover:text-cyan-500" >Crédit Express</a>
                    <ul className="p-2">
                        <li><a className="font-bold hover:text-cyan-500" >Crédit Instantané</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Crédit Sans Justificatif</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Crédit Renouvelable</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Rachat Crédit</a></li>
                    </ul>
                    </li>
                    <li>
                    <a className="font-bold hover:text-cyan-500" >Prêt Personnel</a>
                    <ul className="p-2 ">
                        <li><a className="font-bold hover:text-cyan-500" >Prêt Travaux</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Crédit Auto</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Besoin de Financement</a></li>
                    </ul>
                    </li>
                    <li>
                    <a className="font-bold hover:text-cyan-500" >Vos projet</a>
                    <ul className="p-2">
                        <li><a className="font-bold hover:text-cyan-500" >Se marier</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Faire un voyage</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Acheter une maison</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Créer une entreprise</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Etudiant</a></li>
                        <li><a className="font-bold hover:text-cyan-500" >Seniors</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <a className="ml-8 text-xl font-bold hover:text-cyan-500">MyLoan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="group relative">
                        <a className="cursor-pointer font-bold hover:text-cyan-500">Crédit Instantané</a>
                        <ul className="p-2 absolute left-0 top-full hidden group-hover:block bg-gray-100 rounded-box shadow min-w-[150px] z-50">
                            <li><a className="font-bold hover:text-cyan-500">Crédit Instantané</a></li>
                            <li><a className="font-bold hover:text-cyan-500">Crédit Sans Justificatif</a></li>
                            <li><a className="font-bold hover:text-cyan-500">Crédit Renouvelable</a></li>
                            <li><a className="font-bold hover:text-cyan-500">Rachat Crédit</a></li>
                        </ul>
                    </li>
                    <li className="group relative">
                        <a className="cursor-pointer font-bold hover:text-cyan-500">Prêt Personnel</a>
                        <ul className="p-2 absolute left-0 top-full hidden group-hover:block bg-gray-100 rounded-box shadow min-w-[150px] z-50">
                            <li><a className="font-bold hover:text-cyan-500">Prêt Travaux</a></li>
                            <li><a className="font-bold hover:text-cyan-500">Crédit Auto</a></li>
                            <li><a className="font-bold hover:text-cyan-500">Besoin de Financement</a></li>
                        </ul>
                    </li>
                    <li className="group relative">
                        <a className="cursor-pointer font-bold hover:text-cyan-500">Vos projet</a>
                        <ul className="p-2 absolute left-0 top-full hidden group-hover:block bg-gray-100 rounded-box shadow min-w-[150px] z-50">
                            <li><a className="font-bold hover:text-cyan-500">Se marier</a></li>
                        <li><a className="font-bold hover:text-cyan-500">Faire un voyage</a></li>
                        <li><a className="font-bold hover:text-cyan-500">Acheter une maison</a></li>
                        <li><a className="font-bold hover:text-cyan-500">Créer une entreprise</a></li>
                        <li><a className="font-bold hover:text-cyan-500">Etudiant</a></li>
                        <li><a className="font-bold hover:text-cyan-500">Seniors</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-warning text-black rounded-full">Je demande un crédit</a>
            </div>
            </div>
    </div>
  )
}

export default Navbar
