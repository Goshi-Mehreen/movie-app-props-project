
import React from 'react'

function DropDown() {
  return (
    <div className='bg-zinc-900 px-5 py-8'>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Quality:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>2160p</option>
            <option>1080p</option>
            <option>720p</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Genre:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>All</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Horror</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Rating:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>All</option>
            <option>9+</option>
            <option>8+</option>
            <option>7+</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Year:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>All</option>
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Language:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>All</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-gray-400 font-bold text-base'>Order By:</label>
          <select className='w-full bg-[#1d1d1d] border border-zinc-800 rounded-lg px-4 py-4 text-base text-gray-400 font-medium focus:outline-none focus:border-[#6ac045] cursor-pointer'>
            <option>Latest</option>
            <option>Oldest</option>
            <option>Featured</option>
            <option>Seeds</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default DropDown
