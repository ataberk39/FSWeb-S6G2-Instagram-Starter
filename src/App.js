
import React from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler"
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu"
import SahteVeriler from "./sahte-veri"
import { useState } from "react";

const App = () => {
  
  const [gonderiData, setGonderiData] = useState(SahteVeriler)
  const [aramaCubugu, setAramaCubugu] = useState("")
 

  const aramaFn = (text)=>{
    setAramaCubugu(text)
    let aramaSonucları = gonderiData.filter(gonderi => gonderi.username.includes(text))
    setGonderiData(aramaSonucları)
  }

  const begenmeGeriAl = (gonderiID) => {
    
    let data = gonderiData.map(gonderi => {
      (gonderi.id === gonderiID) && gonderi.likes--;
      return gonderi;
    });
  
    setGonderiData(data);
  };

  const gonderiyiBegen = (gonderiID) => {
    
    let data = gonderiData.map(gonderi => {
      (gonderi.id === gonderiID) && gonderi.likes++;
      return gonderi;
    });
  
    setGonderiData(data);
  };

  return (
    <div className="App">
      <AramaCubugu aramaFn={aramaFn} />
      <Gonderiler gonderiler={gonderiData} gonderiyiBegen={gonderiyiBegen} begenmeGeriAl={begenmeGeriAl} />
      
      
    </div>
  );
};

export default App;
