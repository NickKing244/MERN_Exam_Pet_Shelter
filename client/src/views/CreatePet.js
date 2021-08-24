import React, { useState } from "react";
import PetForm from "../components/PetForm";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const CreatePet = (props) => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling Submit");
    const newPetData = {
      name,
      type,
      description,
      skill1,
      skill2,
      skill3,
    };

    axios
      .post("http://localhost:8000/api/pet", newPetData)
      .then((newPet) => {
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log("Error Creating Pet", err.response);
      });
    setName("");
    setType("");
    setDescription("");
    setSkill1("");
    setSkill2("");
    setSkill3("");
  };
  return (
    <div>
      <div className="flex">
        <h1>Pet Shelter</h1>
        <Link to="/">Back To Home</Link>
      </div>
      <h3>Know A Pet Needing A Home?</h3>
      <PetForm
        errors={errors}
        setErrors={setErrors}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        description={description}
        setDescription={setDescription}
        skill1={skill1}
        skill2={skill2}
        skill3={skill3}
        setSkill1={setSkill1}
        setSkill2={setSkill2}
        setSkill3={setSkill3}
      />
    </div>
  );
};

export default CreatePet;
