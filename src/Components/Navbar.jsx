// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">TOKO CYNA </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="border border-gray-400 w-96 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
              placeholder="Cari..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 focus:outline-none">
            </button>
          </div>
          <div className="text-white">
            <a href="#">Profil</a>
          </div>
          <div className="text-white">
            <a href="#">Kategori</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
