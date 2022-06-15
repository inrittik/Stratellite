import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import ProjectsLandingPage from "./Pages/Projects/LandingPages/NewProjects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Home></Home> */}
        {/* <Projects></Projects> */}
      </Routes>
    </>
  );
}

export default App;
