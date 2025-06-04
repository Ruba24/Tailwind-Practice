import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav class="bg-orange-500 text-white px-4 py-3">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      
      {/* <!-- Left Links --> */}
      <div class="flex space-x-6 text-sm font-medium">
                <img src="./public/Images/Logo.png" alt="Logo" class="w-8 h-8" />
        {/* <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Contact US</a> */}
      </div>

      {/* <!-- Center Logo --> */}
      <div class="flex items-center space-x-10">
        {/* <img src="Logo.png" alt="Logo" class="w-8 h-8" /> */}
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Contact US</a>
      </div>

      {/* <!-- Right Section --> */}
      <div class="flex items-center space-x-4">
        <span class="text-sm font-medium">EN</span>
        <button class="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
          My Shipment
        </button>
      </div>

    </div>
  </nav>

  {/* <!-- Sub-Bar --> */}
  <div class="bg-white text-center text-xs text-gray-700 py-1 shadow-sm">
    Convert cold traffic into registered attendees or onboarding leads for the Baby Brains™ Symposium and platform.
  </div>
    </div>
  )
}

export default NavBar