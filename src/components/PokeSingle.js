import React, { Component } from "react";
// import { useParams } from "react-router-dom";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data, isLoading: false });
        // console.log(this.state.data);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="poke-card">
        <img
          className="poke-img"
          // src={this.state.data.sprites?.other.dream_world.front_default}
          src={this.state.data.sprites?.versions["generation-v"]["black-white"].animated.front_default}
          // img={p.sprites.versions["generation-v"]["black-white"].animated.front_default}

          alt={this.state.data.name}
        />
        <h3>{this.state.data.name}</h3>
        {/* <Link to={`${this.state.data.name}`}>See more</Link> */}
      </div>
    );
  }
}

export default PokeSingle;
