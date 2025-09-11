import React from 'react'

const MiniTitle = ({title, paragraphe}) => {
  return (
    <div className='text-center py-10 px-6 max-w-5xl mx-auto'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-lg'>{paragraphe}</p>
    </div>
  )
}

export default MiniTitle
