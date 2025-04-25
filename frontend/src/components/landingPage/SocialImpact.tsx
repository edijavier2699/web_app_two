// import React from "react";

// // Import images for each card (replace with actual image paths)
// import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/image3.jpg";

const SocialImpact = () => {
  return (
    <div className="px-10 py-10 min-h-screen" >
      
      {/* Section Title and Description */}
      <div className="mb-12">
        <h2 className="text-3xl text-[#A0CC29] font-bold">SOCIAL IMPACT</h2>
        <h2 className="text-5xl text-[#334054] mt-4">
          Tokunize bolsters homeownership and enables wealth creation, while helping to reduce housing inequity and displacement.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white  rounded-lg overflow-hidden">
          <img src={"https://plus.unsplash.com/premium_photo-1661313639796-8c38ae96756f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Card 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#334054]">Social Uplift and Generational Wealth</h3>
            <p className="text-lg text-[#555] mt-2">
            For homeowners in gentrifying areas, Tokunize lets them tap the growth in their home equity without increasing their monthly housing costs. This lets longtime residents stay in the neighborhoods they built while paying for university or passing wealth to the next generation.            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white  rounded-lg overflow-hidden">
          <img src={"https://images.unsplash.com/photo-1563248375-fe799e18fac1?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Card 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#334054]">Environmental Upgrades</h3>
            <p className="text-lg text-[#555] mt-2">
            For homeowners seeking savings from energy improvements like solar panels, a shared appreciation note can replace energy-upgrade targeted lending and achieve monthly savings immediately, not just after the debt is paid off.            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white  rounded-lg overflow-hidden">
          <img src={"https://images.unsplash.com/photo-1560339855-f8eb88b24b57?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"} alt="Card 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#334054]">Helping Local Governments Expand Homeownership</h3>
            <p className="text-lg text-[#555] mt-2">
            For local authorities that use policy to encourage home ownership as a means for middle class economic prosperity,Tokunize reduces the turnover of residential homes into commercialized housing stock, increasing social cohesion and investment in neighborhoods, schools, and community life.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialImpact;
