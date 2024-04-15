import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import All from "./assets/Components/All"
import Fullstackdevelopment from "./assets/Components/Fullstackdevelopment"
import Datascience from "./assets/Components/Datascience"
import Cybersecurity from "./assets/Components/Cybersecurity"
import Career from "./assets/Components/Career"



function App() {

  
  

  return (
    <> 
        <div className="headbar">
        <Link className='opt' to={"/"}>All</Link>
        <Link className='opt' to={"/Fullstackdevelopment"}>Full Stack Development</Link>
        <Link className='opt' to={"/Datascience"}>Data Science</Link>
        <Link className='opt' to={"/Cybersecurity"}>Cyber Security</Link>
        <Link className='opt' to={"/Career"}>Career</Link>
        </div>
    
    
        <Routes>
          <Route Component={All} path="/" />
          <Route Component={Fullstackdevelopment} path="/Fullstackdevelopment" />
          <Route Component={Datascience} path="/Datascience" />
          <Route Component={Cybersecurity} path="/Cybersecurity" />
          <Route Component={Career} path="/Career" />
        </Routes>
        </>
     
  )
}

export default App
