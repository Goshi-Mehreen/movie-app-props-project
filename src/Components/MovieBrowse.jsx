
import React, { useState } from "react";

import Hero from "./Hero";
import CardSection from "./CardSection";

function MovieBrowse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    quality: "all",
    genre: "all",
    rating: "0",
    orderBy: "date_added-desc",
  });

  return (
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
  );
}

export default MovieBrowse;
