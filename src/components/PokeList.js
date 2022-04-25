import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      PokeList will be here. This will be a list of Pokemon
      <Link to="pokesingle">Show me a single pokemon</Link>
      <Outlet />
    </div>
  );
};

export default PokeList;
