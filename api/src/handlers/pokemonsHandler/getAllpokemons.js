const allpokemons = require("../../controllers/pokemonsControllers/getAllpokemonsControllers");

const getAllpokemons = async (req, res) => {
  try {
    const todosLosPokemons = await allpokemons();
    res.status(200).json({ todosLosPokemons });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllpokemons;
