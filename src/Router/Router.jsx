import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../ui/Components/Header/Header";
import Home from "../ui/Pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/movie/:type" element={<h1>movie detail page</h1>} />0
        <Route path="/movies/:id" element={<h1>movies list page</h1>} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
