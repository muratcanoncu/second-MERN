import { useState } from "react";
import axios from "axios";
function PlantForm() {
  const [plantState, setPlantState] = useState({
    name: "",
    climate: "Winter",
    water: 0,
    photo: {},
  });
  const selectPhoto = (event) => {
    console.log(event.target.files[0]);
    setPlantState({ ...plantState, photo: event.target.files[0] });
  };

  const storePlant = (e) => {
    e.preventDefault();

    const plantData = new FormData();
    plantData.append("name", plantState.name);
    plantData.append("climate", plantState.climate);
    plantData.append("water", plantState.water);
    plantData.append("plantPhoto", plantState.photo);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:5200/plant/add", plantData, config)
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
        value={plantState.name}
        onChange={(e) => setPlantState({ ...plantState, name: e.target.value })}
      ></input>
      <label>Climate</label>
      <select
        name="climate"
        defaultValue={plantState.climate}
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
        value={plantState.water}
        onChange={(e) =>
          setPlantState({ ...plantState, water: e.target.value })
        }
      ></input>
      <label>Photo</label>
      <input type="file" name="plantPhoto" onChange={selectPhoto}></input>
      <button type="submit" className="btn btn-success">
        Add Plant
      </button>
    </form>
  );
}

export default PlantForm;
