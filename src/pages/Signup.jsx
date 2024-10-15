import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa"; // Import icons

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex">
        
        {/* Left Side - Background Image */}
        <div className="w-1/2 relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"  // Replace with the actual path of your image
            alt="Resort background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign up</h2>
          <p className="text-gray-500 mb-6">Let's get you all set up so you can access your personal account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex space-x-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">
                I agree to all the{" "}
                <a href="#" className="text-green-500 underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-500 underline">
                  Privacy Policies
                </a>.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Create account
            </button>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Signin With  Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-green-500 underline">
              Login
            </a>
          </p>

          {/* Social Sign Up Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            {/* Facebook */}
            <button className="flex items-center justify-center w-1/3 py-2 border border-[#8dd3bb] rounded-lg text-[#8dd3bb] hover:bg-gray-100">
              <FaFacebookF className="mr-2" />
              <span>Facebook</span>
            </button>

            {/* Google */}
            <button className="flex items-center justify-center w-1/3 py-2 border border-[#8dd3bb] rounded-lg text-[#8dd3bb] hover:bg-gray-100">
              <FaGoogle className="mr-2" />
              <span>Google</span>
            </button>

            {/* Apple */}
            <button className="flex items-center justify-center w-1/3 py-2 border border-[#8dd3bb] rounded-lg text-[#8dd3bb] hover:bg-gray-100">
              <FaApple className="mr-2" />
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
