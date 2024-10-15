import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#8dd3bb' }} className=" h-screen p-5 flex flex-col justify-between text-white">
      <div>
        <div className="mb-8">
          <h1 className=" text-black text-2xl underline font-bold">travel Agency</h1>
        </div>
        <ul className=" text-black space-y-4">
          <li className="flex items-center space-x-2">
            <span className="bg-gray-800 text-white p-2 rounded-md">Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>Admin Profile</span>
          </li>
          <li className="flex items-center space-x-2">
            <Link to=""> <span> Hotel Bookings</span></Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>flight  booking</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div>
        <ul  className="text-black space-y-4">
          <li className="flex items-center space-x-2">
            <span>Payment Details/Transactions</span>
          </li>
          <li className="flex items-center space-x-2">
            <span></span>
          </li>
         
        </ul>
        <button className="bg-gray-800 p-2 rounded-md mt-8 flex items-center space-x-2">
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;