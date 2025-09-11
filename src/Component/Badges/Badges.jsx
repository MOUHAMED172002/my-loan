import React from 'react'
import { MdOutlineLock, MdOutlineFingerprint, MdOutlineAccessTime, MdOutlineFlashOn } from 'react-icons/md';

const Badges = () => {

    const badges = [
        { id: 1, icon: <MdOutlineLock />, text: 'Sécurité', color: 'bg-rose-200' },
        { id: 2, icon: <MdOutlineFingerprint />, text: '100% digital', color: 'bg-teal-200' },
        { id: 3, icon: <MdOutlineAccessTime />, text: 'Virement 72h*', color: 'bg-amber-200' },
        { id: 4, icon: <MdOutlineFlashOn />, text: 'Instantané', color: 'bg-slate-100' },
    ];
  return (
    <div className="flex space-x-2 justify-center my-8 absolute  top-full left-1/2 transform -translate-x-1/2 w-full">
      {badges.map(badge => (
        <div key={badge.id} className={`flex items-center px-3 py-1 rounded-full text-2xl text-black ${badge.color}`}>
          {badge.icon}
          <span className="ml-2">{badge.text}</span>
        </div>
      ))}
    </div>
  )
}

export default Badges
