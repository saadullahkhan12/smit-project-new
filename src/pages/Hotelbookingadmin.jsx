import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase/main"; // Your Firestore setup
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Hotelbookingadmin() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // For handling loading state

  // Fetch card data from Firestore when the component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cards")); // Fetch all documents from 'cards' collection
        const cardList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(cardList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards: ", error);
        setLoading(false);
      }
    };

    fetchCards(); // Call the async function
  }, []);

  // Function to handle card deletion
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "cards", id)); // Delete the document with the provided id
      // Update the state to remove the deleted card from the UI
      setCards(cards.filter((card) => card.id !== id));
      alert('you want to  Card delete ');
    } catch (error) {
      console.error("Error deleting card: ", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Detail</h1>

      {/* Show loading spinner or message */}
      {loading ? (
        <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-4 rounded-lg shadow-md relative">
              <h2 className="text-lg font-bold mb-2">{card.nameOnCard}</h2>
              <p>
                <strong>Card Number:</strong> **** **** **** {card.cardNumber.slice(-4)}
              </p>
              <p>
                <strong>Expiry Date:</strong> {card.expiryDate}
              </p>
              <p>
                <strong>CVC:</strong> {card.cvc}
              </p>
              <p>
                <strong>Country:</strong> {card.country}
              </p>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(card.id)} // Call handleDelete with the card's ID
                className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hotelbookingadmin;
