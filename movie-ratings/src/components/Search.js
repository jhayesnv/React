import React, { useState } from "react";

export default function Search({handleSetQuery, query}) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleSetQuery(e.target.value)}
    />
  );
}
