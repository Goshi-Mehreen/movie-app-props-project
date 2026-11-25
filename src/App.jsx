
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import MovieDetail from "./Components/MovieDetail";
import Footer from "./Components/Footer";
import MovieBrowse from "./Components/MovieBrowse";


function App() {
  
  return (
    <BrowserRouter>
  <div className="flex min-h-screen flex-col">
    <Navbar />

    <Routes>
      <Route path="/" element={<MovieBrowse />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>

    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
