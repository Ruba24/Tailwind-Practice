"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
// import { Menu, X } from "lucide-react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
  return (
    <div>
      <nav className="bg-orange-500 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./Images/Logo.png" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg hidden sm:block">Baby Brains</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={"/"}  className="hover:underline transition-all">
              Home
            </Link>
            <Link to={"/About"}  className="hover:underline transition-all">
              About
            </Link>
            <Link to={"/contact-us"}  className="hover:underline transition-all">
              Contact US
            </Link>
            
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm font-medium">EN</span>
            <Link to = "/login"> <button className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
              My Shipment
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-400">
            <div className="flex flex-col space-y-4 mt-4">
               <Link to={"/"}  className="hover:underline transition-all">
              Home
            </Link>
              <Link to={"/About"}  className="hover:underline transition-all">
              About
            </Link>
              <Link to={"/contact-us"}  className="hover:underline transition-all">
              Contact US
            </Link>
              <div className="flex items-center justify-between pt-4 border-t border-orange-400">
                <span className="text-sm font-medium">EN</span>
                <Link to = "/login"> <button className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                  My Shipment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sub-Bar */}
      <div className="bg-white text-center text-xs sm:text-sm text-gray-700 py-2 px-4 shadow-sm">
        <p className="max-w-4xl mx-auto">
          Convert cold traffic into registered attendees or onboarding leads for the Baby Brains™ Symposium and
          platform.
        </p>
      </div>
    </div>
  )
}

export default NavBar
