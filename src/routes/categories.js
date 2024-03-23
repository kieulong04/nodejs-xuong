import express from "express";
const categoriesRoutes = express.Router();

categoriesRoutes.get("/", (req, res) => {
  res.send("categorie");
});
categoriesRoutes.get("/:id", (req, res) => {
  res.send("categorie");
});
categoriesRoutes.post("/", (req, res) => {
  res.send("categorie");
});
categoriesRoutes.put("/:id", (req, res) => {
  res.send("categorie");
});
categoriesRoutes.delete("/:id", (req, res) => {
  res.send("categorie");
});

export default categoriesRoutes;
