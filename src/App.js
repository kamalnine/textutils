import React, { useState } from 'react'
import Navbar from './componenets/Navbar'
import Textform from './componenets/Textform'

function App() {
  const[mode,setMode] = useState("light");
  const[ldmode,setldmode] = useState("Enable Dark mode");
  const toggle=()=>
  {
     if(mode === 'light')
     {
      setMode("dark");
      document.body.style.backgroundColor = "#0f0e38";
      setldmode("Enable Light Mode");
     }
     else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      setldmode("Enable Dark Mode");
     }
  }
  return (
    <div>
      <Navbar title="TextUtils" about="About Us"  mode={mode} toggle={toggle} ldmode={ldmode}/>
      <Textform title="Enter Text Here" mode={mode}/>
    </div>
  )
}

export default App
