const axios = require("axios");
const { Pokemon } = require("../../db");

const getById = async (id) => {
  let pokemonIdApi = {};

  try {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      const result = response.data;

      pokemonIdApi = {
        id: result.id,
        name: result.name,
        image: result.sprites.other.dream_world.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        speed: result.stats[5].base_stat,
        height: result.height,
        weight: result.weight,
      };
    } catch (error) {
      throw Error(" No se encontro el pokemon en la Api ");
    }

    //! la peticion a la api funciona todo junto no

    let findPokemon = {};
    try {
      findPokemon = await Pokemon.findByPk(id);
    } catch (error) {
      throw Error(" No se encontro el pokemon en la Base de Datos ");
    }

    if (Object.keys(pokemonIdApi).length === 0) {
      return findPokemon;
    } else {
      return pokemonIdApi;
    }
  } catch (error) {
    throw Error(" No se encontraron Pokemons con ese ID ");
  }
};

module.exports = getById;
