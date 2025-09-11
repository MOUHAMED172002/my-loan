import React from 'react'

const Step = () => {
  return (
    <div className='flex justify-center py-10 items-center mx-auto'>
      <ul className="steps w-full max-w-2xl  mx-auto gap-x-10">
        <li className="step step-teal-500  !text-white"></li>
        <li className="step step-teal  !text-white"></li>
        <li className="step"></li>
      </ul>
    </div>
  )
}

export default Step
