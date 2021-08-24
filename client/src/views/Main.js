import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const Main = (props) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((allPets) => {
        setPets(allPets.data);
        console.log(allPets);
      })
      .catch((err) => console.log("Error getting all pets", err));
  }, []);
  return (
    <div>
      <div className="flex">
        <h1>Pet Shelter</h1>
        <Link to="/pets/new">Add a pet to the shelter</Link>
      </div>
      <h3>These Pets Are Looking For A Good Home</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="table">Name</th>
            <th className="table">Type</th>
            <th className="table">Actions</th>
          </tr>
        </thead>
        {pets.length > 0
          ? pets.map((pet, index) => (
              <tbody key={index}>
                <tr>
                  <td className="table">{pet.name}</td>
                  <td className="table">{pet.type}</td>
                  <td className="table">
                    <Link className="accent" to={`pets/${pet._id}`}>
                      Details
                    </Link>
                    |
                    <Link className="accent" to={`/pets/${pet._id}/edit`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </table>
    </div>
  );
};

export default Main;
