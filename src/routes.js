const express = require("express");

const AssociadoController = require("./controllers/AssociadoController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/associados", AssociadoController.index);
routes.post("/associados", AssociadoController.create);
routes.delete("/associados/:id", AssociadoController.delete);

module.exports = routes;
