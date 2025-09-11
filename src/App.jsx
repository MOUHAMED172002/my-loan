import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Badges from './Component/Badges/Badges'

const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Navbar/>
        <Hero/>
        <Badges/>
    </div>
  )
}

export default App
