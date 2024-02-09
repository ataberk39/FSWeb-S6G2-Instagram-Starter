
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
const BegenBolumu = (props) => {

  const { gonderiyiBegen, begeniSayisi,begenmeGeriAl } = props;

  const [likeColor, setLikeColor] = useState(true)
  const [clickEvent, setClickEvent] = useState(true)

  const hanndleClick = ()=>{
    
    if(clickEvent){
      gonderiyiBegen()
      setLikeColor(!likeColor)
      setClickEvent(!clickEvent)
    }
    if(!clickEvent){
      begenmeGeriAl()
      setLikeColor(!likeColor)
      setClickEvent(!clickEvent)
    }
    
  }
  
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={hanndleClick} style={{backgroundColor : likeColor ? "white" : "red"}} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{begeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;
