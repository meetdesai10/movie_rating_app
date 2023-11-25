import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../ui/Components/Header/Header";
import Home from "../ui/Pages/Home/Home";
import MovieList from "../ui/Components/movieList/MovieList";
import MovieDetails from "../ui/Pages/movieDetails/MovieDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
        <Route path="/movies/:type" element={<MovieList/>} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
