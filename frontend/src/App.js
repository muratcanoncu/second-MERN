import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [state, setState] = useState(null);
  const storeName = (userName) => {
    // fetch("http://localhost:5200/", {
    //   method="POST",
    //   body:state
    //  })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setState(response.data.username);
    //   });
    axios
      .post("http://localhost:5200/", { username: userName })
      .then((response) => {
        setState(response.data.username);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Murat Can Second MERN Full Stack App</h1>
        {state ? (
          <div>
            <h2>Welcome {state}!</h2>
          </div>
        ) : null}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Username</label>
          <input type="text" id="username"></input>
          <button onClick={() => storeName(username.value)}>
            Send To Backend
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
