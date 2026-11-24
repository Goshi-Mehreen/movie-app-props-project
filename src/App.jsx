
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CardSection from "./Components/CardSection";
import MovieDetail from "./Components/MovieDetail";
import Footer from "./Components/Footer";

import MovieContextProvider from "./context/MovieContextProvider";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    quality: "all",
    genre: "all",
    rating: "0",
    orderBy: "date_added-desc",
  });

  return (
    <BrowserRouter>
      <MovieContextProvider>
        <div className="flex min-h-screen flex-col">

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
                    filters={filters}
                    setFilters={setFilters}
                  />

                  <CardSection
                    searchQuery={searchQuery}
                    filters={filters}
                  />
                </>
              }
            />

            <Route
              path="/movie/:id"
              element={<MovieDetail />}
            />
          </Routes>

          <Footer />

        </div>
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
