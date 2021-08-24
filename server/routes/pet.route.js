const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  app.post("/api/pet", PetController.addNewPet);
  app.get("/api/pet", PetController.getAllPets);
  app.delete("/api/pet/:petId", PetController.deletePet);
  app.put("/api/pet/:petId", PetController.updatePet);
  app.get("/api/pet/:petId", PetController.getOnePet);
};
