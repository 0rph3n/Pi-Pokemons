const axios = require("axios");
const { Type } = require("../../db");

const allpokemonstypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const allTypes = response.data.results;
    const typeNames = allTypes.map((type) => type.name);
    return typeNames;
  } catch (error) {
    throw Error(" Error al obtener todos los tipos");
  }
};

const pushTypesBdd = async () => {
  try {
    const types = await allpokemonstypes();
    await Type.bulkCreate(types.map((name) => ({ name })));
    return types;
  } catch (error) {
    throw Error("Error al insertar tipos en la base de datos:");
  }
};

pushTypesBdd();

const findAllTypes = async () => {
  try {
    const findTypes = await Type.findAll();
    if (findTypes.lenght !== 0) {
      return findTypes;
    } else {
      throw Error(" Ups no hay ningun tipo de Pokemón para mostrar");
    }
  } catch (error) {
    throw Error("Error al obtener los tipos de Pokemons");
  }
};

module.exports = findAllTypes;
