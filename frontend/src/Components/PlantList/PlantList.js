import { useEffect, useState } from "react";
import axios from "axios";
function PlantList() {
  const [plantList, setPlantList] = useState([]);
  const [updated, setUpdated] = useState(false);
  const deletePlant = (id) => {
    setUpdated(!updated);
    const removePlantId = id;
    axios
      .post(`http://localhost:5200/plant/delete/${removePlantId}`, {
        removePlantId,
      })
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5200/plant/all")
      .then((response) => {
        setPlantList(response.data);
      })
      .catch((err) => console.log(err));
  }, [updated]);

  return (
    <div className="body plantList">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Season</th>
            <th>Water (Month)</th>
            <th>Photo</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {plantList.map((plant) => {
            return (
              <tr key={plant._id}>
                <td>{plant.name}</td>
                <td>{plant.climate}</td>
                <td>{plant.water}</td>
                <td>
                  <img src={`http://localhost:5200/${plant.photo}`}></img>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePlant(plant._id)}
                  >
                    <a>Delete</a>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlantList;
