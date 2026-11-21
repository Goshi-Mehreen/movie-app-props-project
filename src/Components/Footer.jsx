
import React from 'react'

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-4">

      <div className="max-w-6xl mx-auto text-center space-y-5">

        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-3">

          <span className="text-base">
            MOVIEHUB © 2011 - 2026
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Blog
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            DMCA
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            API
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            RSS
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Contact
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Browse Movies
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Requests
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Login
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Language
          </span>

        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-3">

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Status
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Official Link
          </span>

          <span>-</span>

          <span className="text-zinc-500 hover:text-white text-sm font-bold cursor-pointer">
            Follow @yourhandle
          </span>

        </div>

        {/* Third Row */}
        <p className="text-sm">
          By using this site you agree to and accept our{' '}
          <span className="text-zinc-500 hover:text-white text-xs font-bold cursor-pointer">
            User Agreement
          </span>
          , which can be read{' '}
          <span className="text-zinc-500 hover:text-white text-xs font-bold cursor-pointer">
            here
          </span>.
        </p>

      </div>

    </footer>
  )
}

export default Footer
