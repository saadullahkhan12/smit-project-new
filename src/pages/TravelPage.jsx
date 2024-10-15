import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const TravelPage = () => {
  const [from, setFrom] = useState("Lahore");
  const [to, setTo] = useState("Karachi");
  const [departureDate, setDepartureDate] = useState("2022-11-07");
  const [returnDate, setReturnDate] = useState("2022-11-13");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");

  const handleSearch = () => {
    console.log(`Searching flights from ${from} to ${to} ${departureDate} `);
  };
  const locations = [
    { cites: 'Istanbul, Turkey', image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVya2tleSUyMHBsYWNlfGVufDB8fDB8fHww',id:1 },
    { cites: 'Sydney, Australia', image: 'https://media.istockphoto.com/id/1996253989/photo/aerial-view-of-car-parked-with-camper-and-young-man-overlooking-the-great-australian-bight.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9wQGPQjYyf3vm17V5wRSMmJTJXe8ZSdEOkCX76hgP8=',id:2 },
    { cites: 'Baku, Azerbaijan', image: 'https://images.unsplash.com/photo-1708341782930-159a70c42650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXplcmJhaWphbiUyMHBsYWNlfGVufDB8fDB8fHww' ,id:3},
    { cites: 'Maldives', image: 'https://plus.unsplash.com/premium_photo-1681839699894-b42c91a2eea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFsZGl2ZXNwbGFjZXxlbnwwfHwwfHx8MA%3D%3D',id:4 },
    { cites: 'Paris, France', image: 'https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJhbmNlJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D',id:5 },
    { cites: 'New York, US', image: 'https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXMlMjBwbGFjZSUyMGhvdGVsfGVufDB8fDB8fHww',id:6 },
    { cites: 'London, UK', image: 'https://images.unsplash.com/photo-1700480555928-198c674a6ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWslMjBwbGFjZSUyMGhvdGVsfGVufDB8fDB8fHww',id:7 },
    { cites: 'Tokyo, Japan', image: 'https://plus.unsplash.com/premium_photo-1723608003732-f6c9797972bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8akFQQU5wbGFjZSUyMGhvdGVsfGVufDB8fDB8fHww' ,id:8 },
    { cites: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1615880325185-c794f749b92c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWklMjBwbGFjZSUyMGhvdGVsfGVufDB8fDB8fHww',id:9 }
  ];

  return (
    <>
        <div className="bg-gray-100">
      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbmV8ZW58MHx8MHx8fDA%3D")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold">Helping Others LIVE & TRAVEL</h1>
          <p className="mt-4">Special offers to suit your plan</p>
        </div>
      </div>

    











          <div className="container mx-auto p-6">
  <div className="bg-white shadow-md rounded-lg p-4">
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 md:mx-2"
      />
      <select
        value={classType}
        onChange={(e) => setClassType(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
      >
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
      </select>
    </div>
  </div>
</div>





<div className="container mx-auto p-6">
  <div className='bg-white shadow-md rounded-lg p-4'>
    <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
  <input
    type="date"
    value={departureDate}
    onChange={(e) => setDepartureDate(e.target.value)}
    className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
  />
  <input
    type="date"
    value={returnDate}
    onChange={(e) => setReturnDate(e.target.value)}
    className="border border-gray-300 rounded-md p-2 w-full md:w-1/3 md:mx-2"
  />
  <input
    type="number"
    value={passengers}
    onChange={(e) => setPassengers(e.target.value)}
    className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
  />
  </div>
  </div>
</div>


          <button onClick={handleSearch} className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">
            Show Flights
          </button>
        </div>

        <h2 className="mt-6 text-2xl font-bold text-center">Plan your perfect trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {locations.map(({image,cites,id}) => (
            <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={image}  className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{cites}</h3>
                <div className="mt-2">
                <button className="text-grey-500  bg-teal-300 border-r-slate-500 rounded-lg py-1 px-7 ">Flights</button>
                 <Link to={"/HotelListingPage"}><button className="text-grey-500 mx-2 bg-teal-300 border-r-slate-500 rounded-lg py-1 px-7   ">Hotels</button></Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default TravelPage;