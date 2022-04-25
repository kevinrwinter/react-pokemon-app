import React from "react";
import About from "./About";
import FavList from "./FavList";
import Home from "./Home";
import PokeList from "./PokeList";

const Main = () => {
  return (
    <main>
      <Home />
      <FavList />
      <PokeList />
      <About />
    </main>
  );
};

export default Main;
