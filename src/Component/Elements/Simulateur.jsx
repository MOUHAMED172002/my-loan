import React from 'react'
import HeroForm from '../Hero/HeroForm'
import { MdOutlineLock, MdOutlineFingerprint, MdOutlineAccessTime, MdOutlineFlashOn } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Simulateur = () => {
    const { t } = useTranslation();

    const LogueData = [
        {
          id: 1,
          icon: <MdOutlineLock />,
          bgColor: "bg-rose-200"
        },
        {
          id: 2,
          icon: <MdOutlineFingerprint />,
          bgColor: 'bg-teal-200'
        },
        {
          id: 3,
          icon: <MdOutlineAccessTime />,
          bgColor: 'bg-amber-200'
        },
        {
          id: 4,
          icon: <MdOutlineFlashOn />,
          bgColor: 'bg-slate-100'
        }
    ]

    return (
        <div className='bg-gray-100 py-12'>
            <div>
                <HeroForm/>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto py-6">
                    {
                      LogueData.map(logue =>(
                        <div key={logue.id} className='items-center flex flex-col justify-center '>
                                <div className='text-7xl font-none py-3'> {logue.icon} </div>
                                <div className={`btn ${logue.bgColor} rounded-full border-none text-black `}>
                                    {t(`simulateur.cards.card${logue.id}`)}
                                </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Simulateur
