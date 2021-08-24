import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import PetForm from "../components/PetForm";
import axios from "axios";

const EditPet = (props) => {
  const { petId } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [pet, setPet] = useState("");
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${petId}`)
      .then((queriedPet) => {
        console.log(queriedPet);
        setName(queriedPet.data.name);
        setType(queriedPet.data.type);
        setDescription(queriedPet.data.description);
        setSkill1(queriedPet.data.skill1);
        setSkill2(queriedPet.data.skill2);
        setSkill3(queriedPet.data.skill3);
        setPet(queriedPet.data.name);
      })
      .catch((err) => {
        console.log("Error getting pets", err);
      });
  }, []);
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pet/${petId}`, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((updatedPet) => {
        console.log(updatedPet);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error updating pet", err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <div className="flex">
        <h1>Pet Shelter</h1>
        <Link to="/">Home</Link>
      </div>
      <h4>Edit {pet}</h4>
      <PetForm
        handleSubmit={handleUpdateSubmit}
        setName={setName}
        name={name}
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
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};

export default EditPet;
