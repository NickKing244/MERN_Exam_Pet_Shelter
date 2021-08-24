const Pet = require("../models/pet.model");

const addNewPet = (req, res) => {
  const { body } = req;
  Pet.create({
    name: body.name,
    type: body.type,
    description: body.description,
    skill1: body.skill1,
    skill2: body.skill2,
    skill3: body.skill3,
  })
    .then((newPet) => res.json({ newPet }))
    .catch((err) => res.status(400).json(err));
};

const getAllPets = (req, res) => {
  Pet.find()
    .sort({ type: "ascending", name: "ascending" })
    .then((allPets) => res.json(allPets))
    .catch((err) => res.status(400).json(err));
};

const getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.petId })
    .then((onePet) => res.json(onePet))
    .catch((err) => res.status(400).json(err));
};

const deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.petId })
    .then((deletedPet) => res.status(200).send("Deleted Pet"))
    .catch((err) => res.status(400).json(err));
};

const updatePet = (req, res) => {
  console.log(req.body);
  Pet.findOneAndUpdate({ _id: req.params.petId }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => res.json(updatedPet))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  addNewPet,
  getAllPets,
  deletePet,
  updatePet,
  getOnePet,
};
