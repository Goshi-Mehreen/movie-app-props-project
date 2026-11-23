import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CardSection from "./Components/CardSection";
import MovieDetail from "./Components/MovieDetail";
import Footer from "./Components/Footer";
import MovieContextProvider from "./context/MovieContextProvider";

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <div className="flex flex-col">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CardSection />
                </>
              }
            />

            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>

          <Footer />
        </div>
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
