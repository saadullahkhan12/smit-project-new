import React from 'react';







const Footer = () => {
  return (
    <footer className="bg-[#8dd3bb] text-black py-10 px-5">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-gray-300">
        <div className="md:w-1/2 mb-5 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Subscribe Newsletter</h2>
          <p className="text-lg">The Travel</p>
          <p className="text-sm">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 w-full md:w-64 border border-gray-300 rounded-l-md"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          {/* Add the SVG or image for the mailbox */}
          <img src="https://practice.khubaibghouri.com/wp-content/uploads/2024/09/emojione-v1_open-mailbox-with-lowered-flag-300x229.png" alt="Mailbox" className="w-full" />
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex flex-col md:flex-row justify-between mt-10">
        {/* Logo and Social Media */}
        <div className="mb-5 md:mb-0">
          <h2 className="text-2xl font-bold">globe</h2>
          <div className="flex space-x-4 mt-2">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
          {/* Our Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Destinations</h3>
            <ul className="space-y-2">
              <li>Canada</li>
              <li>Alaska</li>
              <li>France</li>
              <li>Iceland</li>
            </ul>
          </div>

          {/* Our Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Activities</h3>
            <ul className="space-y-2">
              <li>Northern Lights</li>
              <li>Cruising & sailing</li>
              <li>Multi-activities</li>
              <li>Kayaking</li>
            </ul>
          </div>

          {/* Travel Blogs */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Travel Blogs</h3>
            <ul className="space-y-2">
              <li>Bali Travel Guide</li>
              <li>Sri Lanka Travel Guide</li>
              <li>Peru Travel Guide</li>
              <li>Bali Travel Guide</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
