
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CardSection from './Components/CardSection'
import MovieDetail from './Components/MovieDetail'
import Footer from './Components/Footer'

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>

      <div className='flex flex-col'>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setSearchQuery={setSearchQuery}
                />

                <CardSection searchQuery={searchQuery} />
              </>
            }
          />

          <Route
            path="/movie/:id"
            element={<MovieDetail />}
          />

        </Routes>


<Footer/>
      </div>

    </BrowserRouter>
  )
}

export default App
