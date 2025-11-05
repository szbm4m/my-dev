import { useState } from "react";
import Button from "@mui/material/Button";
import Header from "./components/Header.jsx";
import Personlist from "./components/Personlist.jsx";
import Page from "./Page.jsx";

function App() {
  
    

  return (
    <div>
      <Header/>
      <Personlist/>
      <Page/>
      
    </div>
  );
}

export default App;
