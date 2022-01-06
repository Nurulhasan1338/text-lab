'Use strict';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

import Textform from "./components/Textform";
import Alert from "./components/Alert";




function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
 


  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }

  const toggle=()=>{
    if(mode==="dark"){
    setmode("light");
    document.body.style.backgroundColor = "white";
    showAlert("dark mode","success")  }
  
  else{
    setmode("dark")
    document.body.style.backgroundColor = "#16191c";
    showAlert("dark mode","success");
       }
  // setcode(cod);

  //      switch (code) {
  //       case 2:
  //         setmode("light");
  //   document.body.style.backgroundColor = "white";
  //         break;
  //       case 1:
  //         setmode("dark")
  //   document.body.style.backgroundColor = "#16191c";
  //         break;
  //       default:
  //         setmode("dark")
  //         document.body.style.backgroundColor = "#16191c";
  //     }
       

  }


  return (
    <>
      <Navbar title="Text Lab" mode={mode} toggleMode={toggle} shAlert={showAlert}/>

      <Alert alert={alert}/>

      <div className=" w-90 p-3 container ">

          <Textform heading="Text Analyzer" mode={mode} shAlert={showAlert}/>
          {/* <About/> */}

      </div>

   </>
  );
}

export default App;
