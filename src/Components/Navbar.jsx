
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-zinc-900 border-b border-[#2c2c2c] sticky top-0 z-50">
      <nav className="mx-auto flex min-h-[60px] max-w-[1200px] items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-[30px] sm:text-[32px] font-semibold text-[#6ac045]"
        >
          YTS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Search */}
          <div className="flex w-[220px] xl:w-[260px] items-center gap-2 rounded-full border-2 border-[#333] bg-[#1d1d1d] px-3 py-1.5 focus-within:border-[#6ac045]">
            <Search size={16} className="text-gray-400" />

            <input
              type="text"
              placeholder="Quick search"
              className="w-full bg-transparent text-sm font-semibold text-gray-200 outline-none placeholder:text-gray-300"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-4 xl:gap-5 text-base xl:text-lg font-semibold text-gray-400">
            <li>
              <Link to="/" className="hover:text-[#6ac045]">
                Home
              </Link>
            </li>

            <li>
              <Link to="/4k" className="hover:text-[#6ac045]">
                4K
              </Link>
            </li>

            <li>
              <Link to="/trending" className="hover:text-[#6ac045]">
                Trending
              </Link>
            </li>

            <li>
              <Link to="/browse" className="hover:text-[#6ac045]">
                Browse Movies
              </Link>
            </li>

            <li className="flex items-center gap-2 whitespace-nowrap">
              <Link to="/login" className="hover:text-[#6ac045]">
                Login
              </Link>

              <span className="h-4 w-px bg-[#6ac045]" />

              <Link to="/register" className="hover:text-[#6ac045]">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#2c2c2c] bg-zinc-900 px-5 py-5">

          {/* Mobile Search */}
          <div className="flex items-center gap-2 rounded-full border-2 border-[#333] bg-[#1d1d1d] px-3 py-2 focus-within:border-[#6ac045]">
            <Search size={16} className="text-gray-400" />

            <input
              type="text"
              placeholder="Quick search"
              className="w-full bg-transparent text-sm font-semibold text-gray-200 placeholder:text-gray-300 outline-none"
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-4 mt-6 text-base font-semibold text-gray-400">
            <li>
              <Link to="/" onClick={closeMenu} className="block hover:text-[#6ac045]">
                Home
              </Link>
            </li>

            <li>
              <Link to="/4k" onClick={closeMenu} className="block hover:text-[#6ac045]">
                4K
              </Link>
            </li>

            <li>
              <Link to="/trending" onClick={closeMenu} className="block hover:text-[#6ac045]">
                Trending
              </Link>
            </li>

            <li>
              <Link to="/browse" onClick={closeMenu} className="block hover:text-[#6ac045]">
                Browse Movies
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <Link to="/login" onClick={closeMenu} className="hover:text-[#6ac045]">
                Login
              </Link>

              <span className="h-4 w-px bg-[#6ac045]" />

              <Link to="/register" onClick={closeMenu} className="hover:text-[#6ac045]">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
