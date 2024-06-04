import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Departments from "./Components/Departments";
import "./App.css";
import PageLayout from "./Components/Layout";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
