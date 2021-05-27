import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
function PlantList() {
  const [plantList, setPlantList] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [plantData, setPlantData] = useState({});
  const [show, setShow] = useState(false);
  const deletePlant = (id) => {
    setUpdated(!updated);
    const removePlantId = id;
    axios
      .post(`http://localhost:5200/plant/delete/${removePlantId}`, {
        removePlantId,
      })
      .then((response) => console.log(response.data));
  };
  const detailPlant = (id) => {
    axios.get("http://localhost:5200/plant/detail/" + id).then((response) => {
      setPlantData(response.data);
      setShow(true);
    });
  };
  const handleClose = () => {
    setShow(false);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Plant Owner</th>
            <th>Season</th>
            <th>Water (Month)</th>
            <th>Photo</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {plantList.map((plant) => {
            return (
              <tr key={plant._id}>
                <td>{plant.name}</td>
                <td>{plant.added_by.name}</td>
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
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => detailPlant(plant._id)}
                  >
                    Update
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
