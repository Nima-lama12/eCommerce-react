import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/Fakestore-logo.png"
import Cart from "../assets/cart.png"

function Header() {
  return (
    <>
    <header className="bg-blue-900 text-white flex items-center justify-around shadow-2xl sticky top-0 z-60">
        <div>
            <img src={Logo} alt="" className='w-25 h-25'/>
        </div>
    <ul className="w-100 list-none flex justify-around">
        <li>
            <NavLink
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-500" : ""
            }
            to="/"
            >
                Products
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
    <div>
      <NavLink 
      className={({ isActive, isPending}) => 
      isPending ? "pending" : isActive ? "bg-red-300" : "" } 
      to="/cart">
        <img src={Cart} alt="" className='h-10 w-10'/>
      </NavLink>
    </div>
    </header>
    </>
  )
}

export default Header