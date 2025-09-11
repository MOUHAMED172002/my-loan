import React from 'react'

const Title = ({ Title1, ColorTitle, Title2, paragraph }) => {
  return (
    <div className='text-center py-10    px-18 items-center justify-center mx-auto'>
        <h1 className='text-5xl  max-w-5xl font-sans px-20 font-bold mb-10'>{Title1} <span className='text-teal-500'>{ColorTitle}</span>{Title2} </h1>
        <p className='justify-center w-6xl text-xl  font-sans  leading-relaxed mt-4'>{paragraph}</p>

    </div>
  )
}

export default Title
