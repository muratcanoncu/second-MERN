import React from "react";
import PlantForm from "./PlantForm";

function PlantFormContainer() {
  return (
    <div className="body d-flex justify-content-center align-items-center flex-column formContainer">
      <h1>Please Add a Plant</h1>
      <PlantForm></PlantForm>
    </div>
  );
}

export default PlantFormContainer;
