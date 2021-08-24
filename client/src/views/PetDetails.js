import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";

const PetDetails = (props) => {
  const [petInfo, setPetInfo] = useState("");
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const { petId } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${petId}`)
      .then((queriedPet) => {
        console.log(queriedPet.data);
        setPetInfo(queriedPet.data);
      })
      .catch((err) => console.log("Error Getting Pet", err));
  }, [petId]);
  const deletePet = (id) => {
    axios
      .delete(`http://localhost:8000/api/pet/${petId}`)
      .then((response) => {
        console.log("Deleted Pet");
        navigate("/");
      })
      .catch((err) => console.log("Error deleting pet", err));
  };
  return (
    <div>
      <div className="flex">
        <h1>Pet Shelter</h1>
        <Link to="/">Back To Home</Link>
      </div>
      <div className="flex">
        <h3>Details About: {petInfo.name}</h3>
        <button id="btn-adopt" onClick={deletePet}>
          Adopt {petInfo.name}
        </button>
      </div>
      <div id="details-border">
        <h4>
          Pet Type: <span className="pet-details">{petInfo.type}</span>
        </h4>
        <h4>
          Description:{" "}
          <span className="pet-details">{petInfo.description}</span>
        </h4>
        <h4>
          Skills:{" "}
          <span className="pet-details">
            {petInfo.skill1}, {petInfo.skill2}, {petInfo.skill3}
          </span>
        </h4>
        <div id="like-flex">
          <button
            id="like-btn"
            onClick={() => {
              setLike(true);
              setCount((prevCount) => prevCount + 1);
            }}
            disabled={like}
          >
            Like {petInfo.name}
          </button>
          <p>{count} like(s)</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
