import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/main';

function Flightbooking() {
  const [from, setFrom] = useState("Lahore");
  const [to, setTo] = useState("Karachi");
  const [departureDate, setDepartureDate] = useState("2022-11-07");
  const [returnDate, setReturnDate] = useState("2022-11-13");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");

  // Function to handle form submission and send data to Firestore
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "data"), {
        from: from,
        to: to,
        departureDate: departureDate,
        returnDate: returnDate,
        passengers: passengers,
        classType: classType,
      });
      alert("Data added successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert(`Error: ${e.message}`);
    }
  };

  return (
    <>
    <div className=' bg-slate-400 h-44 w-200 justify-center '  >
        <h1 className='text-center font-serif text-4xl '>Add Flight </h1>
    </div>
      <form onSubmit={handleSubmit}>
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
            <p>date</p>

              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
              />
              <p>return date</p>

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

        <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">
          Show Flights
        </button>
      </form>
    </>
  );
}

export default Flightbooking;
