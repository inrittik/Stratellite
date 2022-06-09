import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import RightSidebar from "./Components/RightSidebar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      {/* <Home></Home> */}
      <Projects></Projects>
    </>
  );
}

export default App;
