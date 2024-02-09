import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {

  const { gonderiyiBegen, gonderiler, begenmeGeriAl } = props;

  return (
    <div className="posts-container-wrapper">
      
      {gonderiler.map(gonderi => <Gonderi gonderi={gonderi} key={gonderi.id} gonderiyiBegen={gonderiyiBegen} begenmeGeriAl={begenmeGeriAl}/>)}

    </div>
  );
};

export default Gonderiler;
