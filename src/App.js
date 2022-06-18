'Use strict';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  HashRouter as Router,
  Route, 
  Routes                 
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  // const [code, setcode] = useState(1);
const [stylo, setstylo] = useState({
  navbarColor : "#d5dde9",
  bodyColor : "white",
  btColor : "primary"

})

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }
 

  const toggle=(cod)=>{
      //   if(code===1){
  //   setmode("light");
  //   document.body.style.backgroundColor = "white";
  //   showAlert("light mode enabled","success")  }
  
  // else{
  //   setmode("dark")
  //   document.body.style.backgroundColor = "#16191c";
  //   showAlert("dark mode enabled","success");
  //      }
  

       switch (cod) {

        case 1:
          setmode("light");
         document.body.style.backgroundColor = "white";
         setstylo({
          navbarColor : "#d5dde9",
          bodyColor : "white",
          btColor : "success"
        })
          break;

        case 2:
          setmode("dark")
         document.body.style.backgroundColor = "#16191c";
         setstylo({
           navbarColor : "rgb(31 35 50 / 90%)",
           bodyColor : "#16191c",
           btColor : "warning"
         })
          break;

        case 3: 
          setmode("light");
         document.body.style.backgroundColor = "white";
         setstylo({
           navbarColor : "#5adcff",
           bodyColor : "white",
           btColor : "primary"
         })
          break;


        default:
          setmode("dark")
          document.body.style.backgroundColor = "#16191c";

      }
       

  }


  return (
    <>
    <Router>
       
      <Navbar title="Text Lab" mode={mode} toggleMode={toggle} shAlert={showAlert} styls={stylo}/>

      <Alert alert={alert}/>

      <div className=" w-90 p-3 container ">
      <Routes> 
        <Route path='/text-lab/' exact element={<Textform heading="Text Analyzer" mode={mode} shAlert={showAlert} styls={stylo}/>}/>
        <Route path='/text-lab/About' exact element={<About/>}/>
      </Routes>

      </div>
      
     </Router>
   </>
  );
}

export default App;




