import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import FavList from "./components/FavList";
import PokeList from "./components/PokeList";
import PokeSingle from "./components/PokeSingle";
import About from "./components/About";

import { useParams } from "react-router-dom";

const RouterWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favlist" element={<FavList />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokesingle" element={<RouterWrapper />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
