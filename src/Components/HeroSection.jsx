const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      <img
        src="./public/Images/Hero_Section.jpg?height=800&width=1200"
        alt="Hero Section Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Content Section */}
          <div className="bg-black bg-opacity-50 text-white px-6 sm:px-8 py-6 sm:py-8 w-full lg:w-1/2 rounded-2xl lg:rounded-r-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">Freight Strategy.</h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-orange-500 font-semibold leading-tight">
              With a Brain
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-4 leading-relaxed">
              Join the Baby Brains™ Virtual Launch and discover the AGI that's revolutionizing dispatching, investing,
              and logistics intelligence.
            </p>
          </div>

          {/* Tracking Section */}
          <div className="w-full lg:w-auto">
            <div className="bg-orange-300 rounded-lg p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="text"
                  placeholder="Enter your Tracking Number"
                  className="w-full sm:w-80 px-4 py-3 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full sm:w-auto bg-white text-orange-500 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                  Track Shipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
