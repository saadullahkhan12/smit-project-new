import React, { useState } from "react";

function Login() {


      
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/4 max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8 bg-white">
          <div className="flex items-center justify-center mb-8">
            <img src="https://img.icons8.com/?size=100&id=12665&format=png" alt="Globe Logo" className="h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
          <p className="text-gray-600 mb-8">Login to access your Globe account.</p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#8dd3bb]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#8dd3bb]"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[#8dd3bb] text-sm">
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-[#8dd3bb] text-white py-2 rounded-lg font-semibold hover:bg-[#72c0a4] transition duration-300">
              Login
            </button>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-[#8dd3bb]">
                Sign up
              </a>
            </p>
          </form>

          {/* Social Logins */}
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">Or login with</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                <img src="https://img.icons8.com/?size=96&id=118497&format=png" alt="Facebook" className="h-6" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                <img src="https://img.icons8.com/?size=96&id=17949&format=png" alt="Google" className="h-6" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                <img src="https://img.icons8.com/?size=100&id=30840&format=png" alt="Apple" className="h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1530758857751-3c6e5147e24d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW5lfGVufDB8fDB8fHww"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
