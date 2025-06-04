import React from 'react'

const Cards = () => {
  return (
<div class="bg-white py-12 relative">

  <div class="w-full flex justify-between items-center px-4 relative mb-6">
    <div class="h-4 w-full bg-orange-500 relative rounded-t-md">

      <div class="absolute -left-6 h-16 w-36 bg-orange-500 rounded-r-xl"></div>

      <div class="absolute -right-6 h-16 w-36 bg-orange-500 rounded-t-2xl"></div>
    </div>
  </div>


  <div class="flex justify-center space-x-6 px-4">

    <div class="bg-white rounded-md shadow-lg w-52 h-40 flex flex-col items-center justify-center">
      <img src="./public/Images/Vector1.png" alt="Truck" class="h-10 mb-2" />
      <p class="font-semibold text-center">Schedule a pickup</p>
    </div>


    <div class="bg-white rounded-md shadow-lg w-52 h-40 flex flex-col items-center justify-center">
      <img src="./public/Images/Vector2.png" alt="Calculator" class="h-10 mb-2" />
      <p class="font-semibold text-center">Rate Calculator</p>
    </div>


    <div class="bg-white rounded-md shadow-lg w-52 h-40 flex flex-col items-center justify-center">
      <img src="./public/Images/Vector3.png" alt="Location" class="h-10 mb-2" />
      <p class="font-semibold text-center">Baby Brains near you</p>
    </div>
  </div>


  <div class="flex justify-center mt-6">
    <button class="bg-orange-500 text-white font-medium py-2 px-6 rounded shadow hover:bg-orange-600 transition">
      Become A Business Partner
    </button>
  </div>
</div>



  )
}
export default Cards