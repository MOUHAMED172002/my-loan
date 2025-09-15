import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ menu }) => {
  return (
    <div className="navbar bg-gray-100 shadow-sm text-black z-50 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {menu.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="font-bold hover:text-yellow-600 transition-colors">{item.label}</Link>
                {item.children && (
                  <ul className="p-2">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link to={child.path} className="font-bold hover:text-teal-600 transition-colors">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="ml-8 text-xl font-bold">MyLoan</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.map((item, idx) => (
            <li className="group relative" key={idx}>
              <Link to={item.path} className="cursor-pointer font-bold hover:text-teal-600 transition-colors">{item.label}</Link>
              {item.children && (
                <ul className="p-2 absolute left-0 top-full hidden group-hover:block bg-gray-100 rounded-box shadow min-w-[150px] z-50">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <Link to={child.path} className="font-bold hover:text-teal-600 transition-colors">{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-warning text-black rounded-full">Je demande un crédit</button>
      </div>
    </div>
  )
}

export default Navbar
