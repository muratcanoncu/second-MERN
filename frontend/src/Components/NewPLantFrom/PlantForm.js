import { useState, useEffect } from "react";
import axios from "axios";
function PlantForm() {
  const [plantState, setPlantState] = useState({
    name: "",
    climate: "",
    water: 0,
  });

  const storePlant = (e) => {
    e.preventDefault();
    const plant = plantState;

    axios
      .post("http://localhost:5200/plant/add", { plant })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="plantForm" onSubmit={storePlant}>
      <label>Name</label>
      <input
        name="name"
        onChange={(e) => setPlantState({ ...plantState, name: e.target.value })}
      ></input>
      <label>Climate</label>
      <select
        name="climate"
        onChange={(e) =>
          setPlantState({ ...plantState, climate: e.target.value })
        }
      >
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
      </select>
      <label>Water</label>
      <input
        type="number"
        name="water"
        onChange={(e) =>
          setPlantState({ ...plantState, water: e.target.value })
        }
      ></input>
      <button type="submit" className="btn btn-success">
        Add Plant
      </button>
    </form>
  );
}

export default PlantForm;
