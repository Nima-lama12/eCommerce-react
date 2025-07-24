import React from 'react'
import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <>
    <aside className="w-64 min-h-screen bg-white shadow-md border-r fixed top-0 hidden md:block ">
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
        <p className="text-sm text-gray-500">Welcome, User</p>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">

          <NavLink 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? " bg-gray-900" : ""}
            to="/home">
            <li className="block px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition font-medium text-gray-700">Home</li>
            </NavLink>

            <NavLink 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? "text-white bg-gray-900" : ""}
            to="/products">
            <li className="block px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition font-medium text-gray-700">Products</li>
            </NavLink>
          
            <NavLink 
            className={({ isActive, isPending}) =>
            isPending ? "pending" : isActive ? "text-white bg-gray-900" : ""}
            to="/Cart">
              <li className="block px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition font-medium text-gray-700">Cart</li>
            </NavLink>
          
          
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar