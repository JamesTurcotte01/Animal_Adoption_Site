const AnimalController = require("../controllers/animal.controller");

module.exports = app => {
  app.get("/api/animals/", AnimalController.findAllAnimals);
  app.get("/api/animals/:id", AnimalController.findOneSingleAnimal);
  app.put("/api/animals/update/:id", AnimalController.updateExistingAnimal);
  app.post("/api/animals/new", AnimalController.createNewAnimal);
  app.delete("/api/animals/delete/:id", AnimalController.deleteAnExistingAnimal);
};