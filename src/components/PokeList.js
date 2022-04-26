import { Component } from "react";
import PokeCard from "./PokeCard";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });

        Promise.all(fetches).then((res) => {
          console.log(res);
          this.setState({ data: res, isLoading: false });
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="poke-container">
        {this.state.data.map((p) => (
          <PokeCard
            name={p.name}
            key={p.name}
            img={p.sprites.versions["generation-v"]["black-white"].animated.front_default}
          />
        ))}
      </div>
    );
  }
}

export default PokeList;
