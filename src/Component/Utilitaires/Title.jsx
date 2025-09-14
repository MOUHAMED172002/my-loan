import React from 'react'

const Title = ({ Title1, ColorTitle, Title2, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-8">
        {Title1} <span className="text-teal-500">{ColorTitle}</span> {Title2}
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-sans leading-relaxed mt-2 max-w-3xl mx-auto">
        {paragraph}
      </p>
      
    </div>
  )
}

export default Title
