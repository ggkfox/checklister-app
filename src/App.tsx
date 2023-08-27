import { useState } from "react";
import "./App.css";
import CardsPage from "./components/CardsPage/CardsPage";
import NavBar from "./components/NavBar/NavBar";

const handleSelectItem = () => {
  console.log("test");
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <NavBar></NavBar>
      <CardsPage></CardsPage>
    </>
  );
}

export default App;
