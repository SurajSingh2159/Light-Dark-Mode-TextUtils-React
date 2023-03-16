import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, {useState} from 'react'
import Alert from './Components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    <Router>
    <Navbar title="INT-D" home="Home" link="About Us" dropdown="Our works" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element ={<About mode={mode}/>}/>
          <Route exact path="/" element ={<TextForms showAlert={showAlert} heading = "Enter the text to analyse"/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
