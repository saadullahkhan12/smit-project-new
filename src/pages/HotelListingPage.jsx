import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { Link } from 'react-router-dom';

const HotelListingPage = () => {
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(2000); // Default starting price

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://66eaac9955ad32cda479f0d5.mockapi.io/rooms/name');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setHotelData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LinearProgress />;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen"><h1 className="text-red-600">{`Error: ${error}`}</h1></div>;
    }

    // Filter hotels based on selected price
    const filteredHotels = hotelData.filter(hotel => hotel.price <= price);

    return (
        <div className="flex max-w-7xl mx-auto mt-8">
            {/* Filters Section */}
            <div className="w-1/4 pr-8">
                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>

                    {/* Price Filter */}
                    <div className="mb-6">
                        <h3 className="font-medium">Price</h3>
                        <input 
                            type="range" 
                            min="2000" 
                            max="50000" 
                            value={price} 
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full mt-2" 
                        />
                        <div className="flex justify-between text-gray-600 mt-1">
                            <span>${price}</span>
                        </div>
                    </div>

                    {/* Other Filters (e.g., Rating, Amenities) */}
                    {/* ... */}
                </div>
            </div>

            {/* Hotel Listings Section */}
            <div className="w-3/4">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Showing {filteredHotels.length} places</h2>
                </div>

                {/* Hotel Listings */}
                {filteredHotels.map((hotel) => (
                    <div key={hotel.id} className="border p-4 mb-6 rounded-lg shadow-sm flex space-x-4">
                        <img src={hotel.img} alt={hotel.name} className="w-1/4 rounded-lg" />
                        <div className="w-3/4">
                            <h3 className="text-xl font-semibold">{hotel.title}</h3>
                            <p className="text-gray-500">{hotel.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-red-500 text-xl font-bold">${hotel.price}</span>
                                <Link to="/HotelCard">
                                    <button className="px-6 py-2 bg-[#8dd3bb] text-white rounded-lg">View Place</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelListingPage;
