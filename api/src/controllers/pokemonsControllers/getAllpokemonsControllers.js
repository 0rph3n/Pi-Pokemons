const axios = require("axios");
const { Pokemon } = require("../../db");
const { TableHints } = require("sequelize");

const allpokemons = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=50"
    );
    const allTypes = response.data.results;

    const infoPokemon = allTypes.map((info) => info.url);
    const resultPromises = infoPokemon.map((url) => axios.get(url));
    const results = await Promise.all(resultPromises);
    const pokemon = results.map((e) => {
      return {
        id: e.data.id,
        nombre: e.data.name,
        imagen: e.data.sprites.other.dream_world.front_default,
        altura: e.data.height,
        peso: e.data.weight,
        Vida: e.data.stats[0].base_stat,
        Ataque: e.data.stats[1].base_stat,
        Defensa: e.data.stats[2].base_stat,
        Velocidad: e.data.stats[5].base_stat,
      };
    });

    return pokemon;
  } catch (error) {
    throw Error(" Error al obtener peso");
  }
};

module.exports = allpokemons;
