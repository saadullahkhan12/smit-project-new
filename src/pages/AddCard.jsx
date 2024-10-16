
import React, { useState } from "react";

function AddCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("United States");
  const [saveCardInfo, setSaveCardInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ cardNumber, expiryDate, cvc, nameOnCard, country, saveCardInfo });
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
              Exp. Date
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#8dd3bb] focus:border-[#8dd3bb]"
              required
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="123"
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
            placeholder="John Doe"
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

        {/* Footer Text */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment
          and future payments in accordance with their terms. You can always cancel your subscription.
        </p>
      </form>
    </div>
  );
}

export default AddCard;
