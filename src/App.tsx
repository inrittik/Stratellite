import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import ProjectsLandingPage from "./Pages/Projects/LandingPages/NewProjects";
import ActiveProjectsLandingPage from "./Pages/Projects/LandingPages/ActiveProjects";
import InProgressProjects from "./Pages/Projects/LandingPages/InProgressProjects";
import { Routes, Route } from "react-router-dom";
import CompletedProjects from "./Pages/Projects/LandingPages/Completed";
import RejectedProjects from "./Pages/Projects/LandingPages/Rejected";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="/projects/active/approved"
          element={<ActiveProjectsLandingPage status="approved" />}
        ></Route>
        <Route
          path="/projects/active/under-review"
          element={<ActiveProjectsLandingPage status="under-review" />}
        ></Route>
        <Route
          path="/projects/active/in-progress"
          element={<ActiveProjectsLandingPage status="in-progress" />}
        ></Route>
        <Route
          path="/projects/active/rejected"
          element={<ActiveProjectsLandingPage status="rejected" />}
        ></Route>
        <Route
          path="/projects/in-progress"
          element={<InProgressProjects />}
        ></Route>
        <Route
          path="/projects/completed"
          element={<CompletedProjects />}
        ></Route>
        <Route path="/projects/rejected" element={<RejectedProjects />}></Route>
        {/* <Home></Home> */}
        {/* <Projects></Projects> */}
      </Routes>
    </>
  );
}

export default App;
