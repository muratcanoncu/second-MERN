import { useEffect, useState } from "react";
import axios from "axios";
function PlantList() {
  const [plantList, setPlantList] = useState([]);
  useEffect(() => {
    axios("http://localhost:5200/plant/add")
      .then((response) => {
        setPlantList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="body plantList">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Season</th>
            <th>Water (Month)</th>
          </tr>
        </thead>
        <tbody>
          {plantList.map((plant) => {
            return (
              <tr key={plant._id}>
                <td>{plant.name}</td>
                <td>{plant.climate}</td>
                <td>{plant.water}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlantList;
