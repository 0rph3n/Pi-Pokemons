const { Router } = require("express");

const getAllpokemons = require("../handlers/pokemonsHandler/getAllpokemons");
const getPokemonByID = require("../handlers/pokemonsHandler/getPokemonByID");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllpokemons);

pokemonsRouter.get("/:id", getPokemonByID);

pokemonsRouter.post("/", (req, res) => {
  res.send("ruta para crear un pokemon");
});

module.exports = pokemonsRouter;
