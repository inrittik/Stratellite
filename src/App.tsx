import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import ProjectsLandingPage from "./Pages/Projects/LandingPages/NewProjects";
import ActiveProjectsLandingPage from "./Pages/Projects/LandingPages/ActiveProjects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="/projects/active"
          element={<ActiveProjectsLandingPage />}
        ></Route>
        {/* <Home></Home> */}
        {/* <Projects></Projects> */}
      </Routes>
    </>
  );
}

export default App;
