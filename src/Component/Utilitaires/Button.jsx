import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="bg-transparent cursor-pointer border text-white  py-2 px-4 rounded-full hover:bg-white hover:text-black hover:border-white transition duration-300">
        {label}
      </button>
    </div>
  )
}

export default Button
