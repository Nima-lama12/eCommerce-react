import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p className="mb-2 sm:mb-0">&copy; 2025 YourCompany. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer