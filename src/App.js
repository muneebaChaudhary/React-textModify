
import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForms from './components/TextForms';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
 const[alert,setAlert] = useState(null);

 const showAlert = (message,type) =>{
   setAlert({
     msg: message,
     type:type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
 }
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enable","success");
      document.title = "TextModify-Light Mode"

      // ============the below code is use for trigger the tlttle and get the user intension==============

      // setInterval(() => {
      //   document.title = "TextModify-is amzaing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextModify-install Now"
      // }, 1500);
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#0a193d';
      showAlert("Dark mode enable","success");
      document.title = "TextModify-Dark Mode"

    }
  }
  return (
    <>
    {/* <Router> */}
  <Navbar title='TextModify' mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/home" element={   <TextForms textHeading='Enter the text to analyze below' mode={mode} showAlert={showAlert}/>}/> */}

       <TextForms textHeading='Enter the text to analyze below' mode={mode} showAlert={showAlert}/>
{/* </Routes> */}
 
         
        
        
  {/* </Router> */}
 
    </>
    
  );
}

export default App;
