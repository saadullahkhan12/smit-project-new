import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 border-b space-y-4 md:space-y-0">
      {/* Left side with icons and links */}
      <div className="flex space-x-4 md:space-x-6 items-center">
        {/* Flight icon and text */}
        <div className="flex items-center space-x-1">
          <span>
            <img
              src="https://img.icons8.com/?size=50&id=12665&format=png"
              className="w-6 h-6"
              alt="Flight icon"
            />
          </span>
          <span className="relative text-[#3b3b3b] font-semibold group">
            Find Flight
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8dd3bb] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        {/* Stay icon and text */}
        <div className="flex items-center space-x-1">
          <span>
            <img
              src="https://img.icons8.com/?size=50&id=8021&format=png"
              className="w-4 h-6"
              alt="Stay icon"
            />
          </span>

          <Link to={"/HotelListingPage"}>
            <span className="relative text-[#3b3b3b] font-semibold group">
              Find stays
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8dd3bb] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Center logo */}
      <div className="text-2xl md:text-3xl font-bold text-[#3b3b3b]">
        gl<span className="text-[#8dd3bb]">O</span>be
      </div>

      {/* Right side with buttons */}
      <div className="flex space-x-2 md:space-x-4">
        <Link
          to={"/Login"}
          className="bg-white text-gray-800 px-3 md:px-4 py-2 rounded-md border border-gray-300"
        >
          Login
        </Link>

        <Link
          to={"/signup"}
          className="bg-[#3b3b3b] text-white px-3 md:px-4 py-2 rounded-md"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
