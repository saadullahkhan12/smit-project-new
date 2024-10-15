import React from "react";

const HotelCardSmall = () => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://yourimageurl.com/melbourne.jpg"
        alt="Melbourne"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Melbourne</h3>
        <p className="text-gray-600">An amazing journey</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-gray-800">$700</span>
        </div>
        <button className="w-full mt-4 px-4 py-2 bg-[#8dd3bb] text-white font-semibold rounded-lg">
          Book a Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelCardSmall;
