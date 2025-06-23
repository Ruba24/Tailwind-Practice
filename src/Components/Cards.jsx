const Cards = () => {
  return (
    <div className="bg-white py-8 sm:py-12 relative">
      {/* Decorative Header */}
      <div className="w-full flex justify-between items-center px-4 relative mb-6 sm:mb-8">
        <div className="h-3 sm:h-4 w-full bg-orange-500 relative rounded-t-md">
          <div className="absolute -left-4 sm:-left-6 h-12 sm:h-16 w-24 sm:w-36 bg-orange-500 rounded-r-xl"></div>
          <div className="absolute -right-4 sm:-right-6 h-12 sm:h-16 w-24 sm:w-36 bg-orange-500 rounded-t-2xl"></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
          <img src="./public/Images/Vector1.png" alt="Truck" className="h-8 sm:h-10 mb-3 sm:mb-4" />
          <p className="font-semibold text-sm sm:text-base">Schedule a pickup</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
          <img src="./public/Images/Vector2.png" alt="Calculator" className="h-8 sm:h-10 mb-3 sm:mb-4" />
          <p className="font-semibold text-sm sm:text-base">Rate Calculator</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
          <img src="./public/Images/Vector3.png" alt="Location" className="h-8 sm:h-10 mb-3 sm:mb-4" />
          <p className="font-semibold text-sm sm:text-base">Baby Brains near you</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6 sm:mt-8 px-4">
        <button className="bg-orange-500 text-white font-medium py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs">
          Become A Business Partner
        </button>
      </div>
    </div>
  )
}

export default Cards
