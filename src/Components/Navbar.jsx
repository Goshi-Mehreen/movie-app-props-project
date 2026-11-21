import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-zinc-900 border-b border-[#2c2c2c] sticky top-0 z-50 ">
      <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between ">
        {/* Logo */}
        <a href="/" className="text-[32px] font-semibold text-[#6ac045]">
          YTS
        </a>

        {/* Right side: search + links */}
        <div className="flex items-center gap-5">
          {/* Quick search */}
          <div className="flex w-[260px] items-center gap-2 rounded-full border-2 border-[#333] bg-[#1d1d1d] px-3 py-1.5 focus-within:border-[#6ac045]">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Quick search"
              className="w-full bg-transparent text-sm font-semibold text-gray-200 placeholder:text-gray-300 outline-none"
            />
          </div>

          {/* Links */}
          <ul className="flex items-center gap-5 text-lg font-semibold text-gray-400">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <a href="/4k" className="text-[#6ac045]">
                4K
              </a>
            </li>
            <li>
              <a href="/trending" className="hover:text-gray-400">
                Trending
              </a>
            </li>
            <li>
              <a href="/browse" className="hover:text-gray-400">
                Browse Movies
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <a href="/login">Login</a>
              <span className="h-4 w-px bg-[#6ac045]" />
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
