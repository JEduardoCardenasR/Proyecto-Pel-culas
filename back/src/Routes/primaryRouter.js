const {Router} = require("express");
const validateMovieData = require('../middlewares/validateMovieData');
const moviesController = require("../Controllers/moviesController");

const primaryRouter = Router();

primaryRouter.get("/movies", moviesController.getMovies);

primaryRouter.post("/movies", validateMovieData, moviesController.createMovie);

module.exports = primaryRouter;