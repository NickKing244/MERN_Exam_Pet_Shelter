const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet Name Is Required"],
      minLength: [3, "Pet Name Must Be At Least 3 Characters"],
    },
    type: {
      type: String,
      required: [true, "Pet Type Is Required"],
      minLength: [3, "Pet Type Must Be At Least 3 Characters"],
    },
    description: {
      type: String,
      required: [true, "Description Is Required"],
      minLength: [3, "Description Must Be At Least 3 Characters"],
    },
    skill1: {
      type: String,
      required: false,
    },
    skill2: {
      type: String,
      required: false,
    },
    skill3: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);
