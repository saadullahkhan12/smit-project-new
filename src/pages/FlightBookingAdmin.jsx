import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/main";

const FlightBookingAdmin = () => {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    flightNumber: "",
    departure: "",
    destination: "",
    date: "",
    time: "",
    seats: "",
    price: "",
    duration: "",
    status: "On-Time",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlight((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to add a new flight to the list and Firestore
  const addFlight = async () => {
    try {
      // Add flight to Firebase Firestore
      const docRef = await addDoc(collection(db, "flightData"), newFlight);
      console.log("Flight added with ID: ", docRef.id);


      // Add flight to the local state
      setFlights([...flights, newFlight]);

      // Clear the input fields after adding the flight
      setNewFlight({
        flightNumber: "",
        departure: "",
        destination: "",
        date: "",
        time: "",
        seats: "",
        price: "",
        duration: "",
        status: "On-Time",
      });
    } catch (e) {
     alert(e)
    }
  };

  // Function to clear all flight data
  const deleteAllFlights = () => {
    setFlights([]); // Clears the flights state
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Flight Booking Admin</h1>

      {/* Form to Add Flight */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Flight</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="flightNumber"
            placeholder="Flight Number"
            className="border rounded p-2 w-full"
            value={newFlight.flightNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="departure"
            placeholder="Departure"
            className="border rounded p-2 w-full"
            value={newFlight.departure}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="border rounded p-2 w-full"
            value={newFlight.destination}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            className="border rounded p-2 w-full"
            value={newFlight.date}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="time"
            className="border rounded p-2 w-full"
            value={newFlight.time}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="seats"
            placeholder="Available Seats"
            className="border rounded p-2 w-full"
            value={newFlight.seats}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Ticket Price"
            className="border rounded p-2 w-full"
            value={newFlight.price}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="duration"
            placeholder="Flight Duration"
            className="border rounded p-2 w-full"
            value={newFlight.duration}
            onChange={handleInputChange}
          />
        </div>

        <select
          name="status"
          className="border rounded p-2 w-full md:w-1/2 mb-4"
          value={newFlight.status}
          onChange={handleInputChange}
        >
          <option value="On-Time">On-Time</option>
          <option value="Delayed">Delayed</option>
        </select>

        <button
          onClick={addFlight}
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 mr-4"
        >
          Add Flight
        </button>

        <button
          onClick={deleteAllFlights}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
        >
          Delete All Flights
        </button>
      </div>

      {/* Flight List Table */}
      {flights.length > 0 ? (
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Flight List</h2>

          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-teal-500 text-white">Flight Number</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Departure</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Destination</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Date</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Time</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Seats</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Price</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Duration</th>
                <th className="px-4 py-2 bg-teal-500 text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="border px-4 py-2">{flight.flightNumber}</td>
                  <td className="border px-4 py-2">{flight.departure}</td>
                  <td className="border px-4 py-2">{flight.destination}</td>
                  <td className="border px-4 py-2">{flight.date}</td>
                  <td className="border px-4 py-2">{flight.time}</td>
                  <td className="border px-4 py-2">{flight.seats}</td>
                  <td className="border px-4 py-2">{flight.price}</td>
                  <td className="border px-4 py-2">{flight.duration}</td>
                  <td className="border px-4 py-2">{flight.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-gray-600">No flights available. Add a new flight.</p>
      )}
    </div>
  );
};

export default FlightBookingAdmin;