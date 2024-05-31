import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Departments from "./Components/Departments";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </>
  );
}

export default App;
