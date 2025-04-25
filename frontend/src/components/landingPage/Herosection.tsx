import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Herosection = () => {
  return (
    <div
      style={{
        position: 'relative', // For overlay positioning
        backgroundImage:
          'url("https://images.unsplash.com/photo-1676500684456-99f21e42a6fe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover', // Make the background image cover the entire section
        backgroundPosition: 'center', // Center the background image
        height: 'calc(100vh - 80px)', // Full viewport height minus 80px (for any header or margin)
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'space-between', // Push the content and buttons to the top and bottom
        alignItems: 'center', // Center the content horizontally
        color: 'white', // Text color set to white for contrast
        textAlign: 'center', // Center the text
        padding: '0 20px', // Add padding for spacing
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
          zIndex: 0, // Ensure overlay stays behind text and buttons
        }}
      ></div>

      {/* Main content (Title and Description) */}
      <div style={{ zIndex: 10, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="text-4xl font-bold mb-4">
          Home Equity Loan for the 21st Century
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Tokunize lets institutions partner with homeowners to unlock a new,
          multi-trillion dollar asset class and transform home financing.
        </p>
      </div>

      {/* Links at the bottom */}
      <div className="z-10 flex space-x-4 mb-10">
        {/* Link for Homeowners */}
        <Link
          to="/homeowners"
          className="px-6 py-3 bg-[#C8E870] text-black rounded-full text-lg font-semibold transition"
        >
          Homeowners
        </Link>
        {/* Link for Investors */}
        <Link
          to="/investors"
          className="px-6 py-3 bg-[#C8E870] text-black rounded-full text-lg font-semibold transition"
        >
          Investors
        </Link>
        {/* Link for Originators */}
        <Link
          to="/originators"
          className="px-6 py-3 bg-[#C8E870] text-black rounded-full text-lg font-semibold transition"
        >
          Originators
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
