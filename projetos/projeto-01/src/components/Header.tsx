import React, { useState } from 'react';
import { Menu, X, Search, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Rony Inside Code</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-gray-900 bg-white rounded-lg focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-700">Home</a>
              <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-gray-700">Projects</a>
              <a href="#services" className="block px-3 py-2 rounded-md hover:bg-gray-700">Services</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-700">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}