import React from "react";
import "./App.css";
import Router from "./Router/Router";
export default function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

// popular
// https://api.themoviedb.org/3/movie/popular?api_key=135fa4257e677f99f9f28f86b9b92971&language=en-US
// up coming
// https://api.themoviedb.org/3/movie/upcoming?api_key=135fa4257e677f99f9f28f86b9b92971&language=en-US
// top rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=135fa4257e677f99f9f28f86b9b92971&language=en-US
//  image path 
// https://image.tmdb.org/t/p/original 