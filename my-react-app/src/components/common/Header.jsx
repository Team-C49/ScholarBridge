import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#DDEB9D] p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-700">LOGO</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 items-center text-gray-600 font-medium">
          <a href="#" className="hover:text-custom-dark-green">Home</a>
          <a href="#" className="hover:text-custom-dark-green">About Us</a>
          <a href="#" className="hover:text-custom-dark-green">Contributors</a>
          <a href="#" className="hover:text-custom-dark-green">Contact Us</a>
          <a href="#" className="hover:text-custom-dark-green">FAQs</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-md font-semibold shadow-sm hover:bg-gray-100 transition-colors">
            LOGIN
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-md font-semibold shadow-sm hover:bg-gray-100 transition-colors">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;