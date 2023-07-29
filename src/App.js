import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, typ)=>{
      setAlert({
        msg:message,
        type:typ
      })
      setTimeout(() => {
        setAlert(null)
      }, 1700);
  }

   const toggleMode=(col)=>{
    removebodyclass();
    console.log(col);
    document.body.classList.add("bg-"+col);
      if (mode==="dark"){
        setMode("light")
        document.body.style.backgroundColor="white";
        showAlert("Light Mode has been enabled","success");
        document.title="TextUtils-Light Mode";
      }
      else{
        setMode("dark")
        document.body.style.backgroundColor="#1d222e";
        showAlert("Dark Mode has been enabled","success");
        document.title="TextUtils-Dark Mode";
        // setInterval(() => {
        //   document.title="TextUtils is amazing ";
        // }, 2000);
        // setInterval(() => {
        //   document.title="Try TextUtils now !!!";
        // }, 900);
      }
   }

    const removebodyclass=()=>{
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("bg-warning");
      document.body.classList.remove("bg-danger");
      document.body.classList.remove("bg-success");
    }
  return (
    <>

    <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
  
      <Routes>
        <Route path="/" element={<Textform heading="Enter The Text Below To Analyze " mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode}/>} />
        
      </Routes>
  

    </>
  );
}

export default App;
