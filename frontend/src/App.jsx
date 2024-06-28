import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./Components/Layout";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Departments from "./Pages/Departments";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
