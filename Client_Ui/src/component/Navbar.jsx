import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { navbar } from '../constants';
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl 
                           transition-transform duration-300 
                           group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="hidden sm:block text-xl font-bold 
                               bg-gradient-to-r from-indigo-600 to-purple-600 
                               bg-clip-text text-transparent">
                BrandName
              </span>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navbar.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.id}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 
                             rounded-lg transition-all duration-300
                             hover:text-indigo-600 hover:bg-indigo-50
                             after:content-[''] after:absolute after:bottom-0 
                             after:left-1/2 after:-translate-x-1/2
                             after:w-0 after:h-[2px] after:bg-indigo-600 
                             after:transition-all after:duration-300
                             hover:after:w-1/2"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            {/* ── CTA Button ── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/order"
                className="relative px-6 py-2.5 text-sm font-semibold text-white 
                           bg-gradient-to-r from-indigo-600 to-purple-600 
                           rounded-full shadow-lg shadow-indigo-500/30
                           transition-all duration-300 
                           hover:shadow-xl hover:shadow-indigo-500/40 
                           hover:scale-105 hover:-translate-y-0.5
                           active:scale-95
                           before:content-[''] before:absolute before:inset-0 
                           before:rounded-full before:bg-white/20 
                           before:opacity-0 before:transition-opacity 
                           before:duration-300 hover:before:opacity-100"
              >
                Order Now ✨
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col 
                         justify-center items-center gap-1.5 
                         rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full 
                            transition-all duration-300 origin-center
                            ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full 
                            transition-all duration-300
                            ${isOpen ? 'opacity-0 scale-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-gray-700 rounded-full 
                            transition-all duration-300 origin-center
                            ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-6 pb-6 pt-2 space-y-1 bg-white/90 backdrop-blur-md 
                          border-t border-gray-100">
            {navbar.map((nav, index) => (
              <Link
                key={index}
                to={nav.id}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-600 
                           rounded-xl transition-all duration-300
                           hover:text-indigo-600 hover:bg-indigo-50 
                           hover:translate-x-2"
              >
                {nav.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/order"
                onClick={() => setIsOpen(false)}
                className="block text-center px-6 py-3 text-sm font-semibold 
                           text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                           rounded-xl shadow-lg shadow-indigo-500/30
                           transition-all duration-300 hover:shadow-xl 
                           active:scale-95"
              >
                Order Now ✨
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Spacer for fixed navbar ── */}
      <div className="h-16 md:h-20" />

      {/* ── Page Content ── */}
      <Outlet />
    </div>
  );
};

export default Navbar;