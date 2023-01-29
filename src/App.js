import './App.css';
import Navbar from './Components/Navbar';
import TikTakToe from './Components/TikTakToe';
import React, { useState } from 'react'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('#cbd5e1')  // this is white color

  // #0f172a this is dark color
  // zinc-900 code -- rgb(24 24 27) 

  const toggleDark = () => {
    if (mode === '#cbd5e1') {  // white
      setMode('#0f172a')   // dark
      document.body.style.background = '#0f172a'  //dark
    }
    else {
      setMode('#cbd5e1')
      document.body.style.background = '#cbd5e1'
    }
  }



  return (
    <>

    <BrowserRouter>
      <Navbar toggleDark={toggleDark} mode={mode} />

      <Routes>
        <Route path="/about" element={ <About mode={mode} />} >
        
        </Route>
        <Route path="/contactus" element={<ContactUs mode = {mode}/>}>
        
        </Route>
        <Route path="/" element={  <TikTakToe mode={mode} />}>
      
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
