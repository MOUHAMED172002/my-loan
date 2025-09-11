import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Badges from './Component/Badges/Badges'
import Catégories from './Component/Catégories/Catégories'
import Clearfix from './Component/Clearfix/Clearfix'


const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen text-black'>
        <Navbar/>
        <Hero/>
        <Badges/>
        <Catégories/>
        <Clearfix/>
    </div>
  )
}

export default App
