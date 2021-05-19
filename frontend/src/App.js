import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//! Components
import Navbar from "./Components/Navbar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import PlantFormContainer from "./Components/NewPLantFrom/PlantFormContainer";
import PlantList from "./Components/PlantList/PlantList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/plantform">
            <PlantFormContainer></PlantFormContainer>
          </Route>
          <Route path="/plantlist">
            <PlantList></PlantList>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
