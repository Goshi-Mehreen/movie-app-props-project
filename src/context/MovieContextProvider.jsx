
import React, { useState } from 'react'
import MovieContext from './MovieContext'

function MovieContextProvider({ children }) {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
