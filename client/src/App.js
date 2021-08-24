import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import CreatePet from "./views/CreatePet";
import PetDetails from "./views/PetDetails";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <CreatePet path="/pets/new" />
        <PetDetails path="/pets/:petId" />
        <EditPet path="/pets/:petId/edit" />
      </Router>
    </div>
  );
}

export default App;
