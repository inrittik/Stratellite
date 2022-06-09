import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import RightSidebar from "./Components/RightSidebar";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <>
         <Sidebar></Sidebar>
         <Home></Home>
         <RightSidebar></RightSidebar>
      </>
   );
}

export default App;
