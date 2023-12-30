const { Router } = require("express");

const getAllpokemons = require("../handlers/pokemonsHandler/getAllpokemons");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllpokemons);

pokemonsRouter.get("/:id", (req, res) => {
  res.send("ruta para obtener un personaje por id");
});

pokemonsRouter.post("/", (req, res) => {
  res.send("ruta para crear un pokemon");
});

module.exports = pokemonsRouter;
