const Banner = () => {
    return (
      <div
        className="relative bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          minHeight: "100vh",
        }}
      >
        {/* White Overlay with opacity */}
        <div className="absolute inset-0 bg-white opacity-85"></div>
  
        {/* Content */}
        <div className="relative z-10 container mx-auto space-y-8 px-4">
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <div className="animate-fade-in-up space-y-12">
              <h2 className="text-4xl sm:text-5xl font-serif text-[#334054] leading-tight mb-6 drop-shadow-xl">
                Tokunize makes home equity accessible for homeowners and creates a new institutional asset class that permanently changes the game.
              </h2>
  
              <p className="text-xl md:text-2xl text-[#334054] mb-8 font-bold leading-relaxed drop-shadow-md">
                LET'S DO IT TOGETHER.
              </p>
  
              {/* Buttons Section */}
              <div className="flex justify-center gap-4">
                {/* Homeowners Button */}
                <button className="border-2 border-[#334054] text-[#334054] py-3 px-6 font-semibold transition duration-300 transform hover:scale-105">
                  Homeowners
                </button>
  
                {/* Investors Button */}
                <button className="border-2 border-[#334054] text-[#334054] py-3 px-6 font-semibold transition duration-300 transform hover:scale-105">
                  Investors
                </button>
  
                {/* Originators Button */}
                <button className="border-2 border-[#334054] text-[#334054] py-3 px-6 font-semibold transition duration-300 transform hover:scale-105">
                  Originators
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  