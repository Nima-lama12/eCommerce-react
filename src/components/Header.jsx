import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom'

function Header() {
      const [showTooltip, setShowTooltip] = useState(false); // 🔥 Define state here
  return (
    <>
    <header className="bg-gray-300 flex items-center justify-around shadow-2xl sticky top-0 z-60">
        <div>
            <img src="https://zemez.io/html/wp-content/uploads/sites/9/2017/10/logo.png" alt="" className="h-20 w-60" />
        </div>
    <ul className="w-100 list-none flex justify-around">
        <li>
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-500" : ""
            }
            to="/"
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""}
            to="/about">
            About
            </NavLink>
        </li>
        <li>
            <NavLink 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""}
            to="/contact">
                Contact
            </NavLink>
        </li>
    </ul>
    <div className="relative inline-block">
      <button
        className="border-1 rounded-2xl bg-red-500 text-white px-3 py-2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        admin login
      </button>

      {showTooltip && (
        <div className="absolute top-full mb-2 w-max px-3 py-2 border rounded-2xl text-white bg-red-300">
            !!  Only for admin
        </div>
      )}
    </div>
    </header>
    </>
  )
}

export default Header