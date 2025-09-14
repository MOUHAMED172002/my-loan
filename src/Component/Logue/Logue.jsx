import React from 'react'
import { MdOutlineLock, MdOutlineFingerprint, MdOutlineAccessTime, MdOutlineFlashOn } from 'react-icons/md';
import { HiUserGroup } from "react-icons/hi"
import Button from '../Utilitaires/Button';

const Logue = () => {
  const LogueData = [
    {
      id: 1,
      icon: <MdOutlineLock />,
      titre: "Sécurisé",
      texte: "Protection des données garantie",
      bgColor: "bg-rose-200"
    },
    {
      id: 2,
      icon: <MdOutlineFingerprint />,
      titre: "100%digital",
      texte: "Faites votre demande de prêt directement en ligne.",
      bgColor: 'bg-teal-200'
    },
    {
      id: 3,
      icon: <MdOutlineAccessTime />,
      titre: 'Virement 72h*',
      texte: "Déblocage des fonds ultra rapide.",
      paragraphe: "*Après délai légal de rétractation et validation finale",
      bgColor: 'bg-amber-200'
    },
    {
      id: 4,
      icon: <MdOutlineFlashOn />,
      titre: "Réponse Instantanée",
      texte: 'Réponse de principe immédiate',
      bgColor: 'bg-slate-100'
    },
    {
      id: 5,
      icon: <HiUserGroup />,
      titre: "Crédits octroyés",
      texte: "200 000 utilisateurs ont déjà reçu leur prêt avec le simulateur Myloan",
      bgColor: 'bg-cyan-200'
    },
    {
      id: 6,
      icon: <HiUserGroup />,
      titre: "Souscription en temps réel",
      texte: "Signez en direct",
      bgColor: 'bg-indigo-300'
    }
  ]
  return (
    <div className='bg-gray-200 flex flex-col items-center py-8 px-2'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-6">
        {
          LogueData.map(logue => (
            <div key={logue.id} className='flex flex-col items-center bg-white rounded-xl shadow p-6 h-full'>
              <div className='text-6xl flex justify-center items-center py-3 text-teal-600'> {logue.icon} </div>
              <div className={`rounded-full border-none text-xs font-bold font-sans text-black h-[30px] px-4 flex items-center justify-center ${logue.bgColor} my-2`}>
                {logue.titre}
              </div>
              <p className='my-2 text-base font-sans text-center'>{logue.texte}</p>
              {logue.paragraphe && (
                <p className="text-xs text-gray-500 italic mt-1">{logue.paragraphe}</p>
              )}
            </div>
          ))
        }
      </div>
      <button className='btn bg-amber-300 w-auto px-8 py-2 text-md font-bold text-black rounded-full mt-4'>J&apos;en profite !</button>
    </div>
  )
}

export default Logue
