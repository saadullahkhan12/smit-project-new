import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/main"; // Firebase setup

function AddCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("United States");
  const [saveCardInfo, setSaveCardInfo] = useState(false);
  const [message, setMessage] = useState(""); // For showing success/error messages
  const [showThankYou, setShowThankYou] = useState(false); // For showing the Thank You popup

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object to send
    const cardData = {
      cardNumber,
      expiryDate,
      cvc,
      nameOnCard,
      country,
      saveCardInfo,
      createdAt: new Date(), // Add a timestamp if necessary
    };

    try {
      // Send data to Firestore collection 'cards'
      await addDoc(collection(db, "cards"), cardData);
      setMessage("Card details added successfully!");

      // Reset form fields after successful submission
      setCardNumber("");
      setExpiryDate("");
      setCvc("");
      setNameOnCard("");
      setCountry("United States");
      setSaveCardInfo(false);

      // Show Thank You popup
      setShowThankYou(true);
    } catch (error) {
      console.error("Error adding card details: ", error);
      setMessage("Error adding card details, please try again.");
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false); // Close the popup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a new Card</h2>

        {/* Card Number */}
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="4321 4321 4321 4321"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
            required
          />
        </div>

        {/* Expiry Date & CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Memebers
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="memebers"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
              required
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
            Stay days
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="how many days to stay"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
              required
            />
          </div>
        </div>

        {/* Name on Card */}
        <div>
          <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
            Name on Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="User Name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
            required
          />
        </div>

        {/* Country or Region */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country or Region
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
            required
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Pakistan">Pakistan</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Save Information Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveCardInfo"
            checked={saveCardInfo}
            onChange={(e) => setSaveCardInfo(e.target.checked)}
            className="h-4 w-4 text-[#8dd3bb] focus:ring-[#8dd3bb] border-gray-300 rounded"
          />
          <label htmlFor="saveCardInfo" className="ml-2 block text-sm text-gray-700">
            Securely save my information for 1-click checkout
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#8dd3bb] text-white py-2 rounded-lg font-semibold hover:bg-[#72c0a4] transition duration-300"
        >
          Add Card
        </button>

        {/* Success/Error Message */}
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
      </form>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Hotel Booked</h3>
            <p>Your card has been added successfully.</p>
            <button
              onClick={handleCloseThankYou}
              className="mt-4 bg-[#8dd3bb] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#72c0a4] transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCard;
