import React from 'react';
import { Link } from 'react-router-dom';


function Profile() {
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className='border 	w-full bg-slate-400  h-56' >
        <h1 className='width-full' >.</h1>
      </div>
      {/* Cover Image Section */}
      <div className='width-full height-full bg-slate-400 py-26 ' ><p></p></div>
      {/* Profile Section */}
      <div className="-mt-16 flex flex-col items-center">
        <img 
          src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwb2ZmaWNlJTIwbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Profile" 
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
        <div className="text-center mt-3">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500">john.doe@gmail.com</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 w-full max-w-4xl">
        <div className="flex justify-center space-x-8 border-b">
          <button className="py-2 px-4 font-semibold border-b-4 border-[#8dd3bb] text-gray-800">Account</button>
          <button className="py-2 px-4 text-gray-500">History</button>
          <Link to={"/SignUpForm"}  className="py-2 px-4 text-gray-500" > Payment methods</Link>
          
          
          
          
        </div>

        {/* Account Details */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Account</h3>
          <div className="space-y-4">
            {/* Name Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg">John Doe</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>

            {/* Email Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg">john.doe@gmail.com</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Add another email</button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>

            {/* Password Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Password</p>
                <p className="text-lg">********</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>

            {/* Phone Number Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Phone number</p>
                <p className="text-lg">+1 000-000-0000</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>

            {/* Address Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-lg">St 32 main downtown, Los Angeles, California, USA</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>

            {/* Date of Birth Field */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Date of birth</p>
                <p className="text-lg">01-01-1992</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
