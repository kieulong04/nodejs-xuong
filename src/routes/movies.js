import express from "express";
import MovieController from "../controllers/movies.js";

const moviesRoutes = express.Router();
const moviescontroller = new MovieController();

moviesRoutes.get("/",moviescontroller.getAllMovies);
moviesRoutes.get("/:id",moviescontroller.getMoviesDetail);
moviesRoutes.post("/",moviescontroller.createMovies);
moviesRoutes.put("/:id",moviescontroller.updateMovies);
moviesRoutes.delete("/:id", moviescontroller.deleteMovies);

export default moviesRoutes;
