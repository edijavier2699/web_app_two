
const TokunizeGoal = () => {
  return (
    <div 
        style={{ minHeight: 'calc(100vh - 80px)' }}
        className=" mx-auto items-center flex   justify-center px-10 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="space-y-5 mb-7 md:mb-0">
          <h2 className="text-3xl text-[#C8E870] font-bold ">WHAT IS  TOKUNIZE?</h2>
          <h2 className="text-5xl text-[#334054]">
            Innovation that helps homeowners, investors, and the economy.
          </h2>
          <p >
            Tokunize partners with loan originators to offer a shared appreciation home equity loan with no interest or monthly payments. Tokunize enables homeowners to partner with institutional investors to access trapped home equity on fair and transparent terms. Homeowners keep control of their most important asset and gain a partner in its future growth.
          </p>
          <p>
            Institutional investors get a new asset class with the potential to generate alpha.
          </p>
        </div>

        {/* Image Section */}
        <div >
          <img
            src="https://plus.unsplash.com/premium_photo-1663126992556-c03b8ecf3bf8?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
            alt="Tokunize"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default TokunizeGoal;
