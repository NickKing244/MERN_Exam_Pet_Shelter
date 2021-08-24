import React from "react";

const PetForm = (props) => {
  const {
    errors,
    name,
    setName,
    handleSubmit,
    type,
    setType,
    description,
    setDescription,
    skill1,
    setSkill1,
    skill2,
    setSkill2,
    skill3,
    setSkill3,
  } = props;
  return (
    <div>
      <form className="form-border" onSubmit={handleSubmit}>
        <div className="form-flex">
          <div>
            <br />
            <label className="form-space">Name:</label>
            <br />
            <input
              className="form-space"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label className="form-space">Type:</label>
            <br />
            <input
              className="form-space"
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
            <br />
            <label className="form-space">Description:</label>
            <br />
            <input
              className="form-space"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <p>Skills (Optional)</p>
            <label className="form-space">Skill 1:</label>
            <br />
            <input
              className="form-space"
              type="text"
              onChange={(e) => setSkill1(e.target.value)}
              value={skill1}
            />
            <br />
            <label className="form-space">Skill 2:</label>
            <br />
            <input
              className="form-space"
              type="text"
              onChange={(e) => setSkill2(e.target.value)}
              value={skill2}
            />
            <br />
            <label className="form-space">Skill 3:</label>
            <br />
            <input
              type="text"
              onChange={(e) => setSkill3(e.target.value)}
              value={skill3}
              className="form-space"
            />
          </div>
        </div>
        <input className="button" type="submit" value="Submit" />
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </div>
  );
};

export default PetForm;
