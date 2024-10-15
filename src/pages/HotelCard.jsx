

import React from "react";

const HotelCard = () => {
  return (
    <div className="max-w-6xl mx-auto font-sans text-gray-800">
      {/* Hotel Header */}
      <div className="flex justify-between items-center border-b border-gray-300 py-6">
        <div>
          <h1 className="text-3xl font-semibold">CVK Park Bosphorus Hotel Istanbul</h1>
          <div className="flex items-center text-gray-600 mt-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <p>Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437</p>
            <div className="ml-6 text-yellow-500">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="ml-2 text-gray-500">5 Star Hotel</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#8dd3bb]">$240</div>
          <div className="text-sm text-gray-500">/night</div>
          <button className="mt-4 px-6 py-2 bg-[#8dd3bb] text-white rounded-lg">
            Book now
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <img
            src="https://yourimageurl.com/pool.jpg"
            alt="Pool"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://yourimageurl.com/room1.jpg"
            alt="Room 1"
            className="w-full h-36 object-cover rounded-lg"
          />
          <img
            src="https://yourimageurl.com/room2.jpg"
            alt="Room 2"
            className="w-full h-36 object-cover rounded-lg"
          />
          <img
            src="https://yourimageurl.com/room3.jpg"
            alt="Room 3"
            className="w-full h-36 object-cover rounded-lg"
          />
          <img
            src="https://yourimageurl.com/room4.jpg"
            alt="Room 4"
            className="w-full h-36 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-4 text-gray-600">
          Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago...
        </p>
        <div className="mt-6 flex items-center">
          <div className="bg-[#8dd3bb] text-white font-bold text-lg px-4 py-2 rounded-lg">
            4.2
          </div>
          <div className="ml-4 text-gray-600">
            <span>Very good</span>
            <span className="block text-sm">371 reviews</span>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-6 grid grid-cols-4 gap-4 text-center">
          <div className="border p-4 rounded-lg">
            <span className="text-gray-600">Near park</span>
          </div>
          <div className="border p-4 rounded-lg">
            <span className="text-gray-600">Near nightlife</span>
          </div>
          <div className="border p-4 rounded-lg">
            <span className="text-gray-600">Near theater</span>
          </div>
          <div className="border p-4 rounded-lg">
            <span className="text-gray-600">Clean Hotel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
