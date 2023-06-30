import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiVolume2 } from "react-icons/fi";
import { FiVolume1 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";

import { useSelector, useDispatch } from 'react-redux'
import { storeToken, clearToken, askToken } from '../Session/userSession'

/**
 * Code to display the menu
 * @return  {React element}             Containers that returns the menu
 */




function Menu(props) {
  const dispatch = useDispatch()

const [volumeState, setVolumeState] = useState(true);

function VolumeClick() {

  dispatch(storeToken(1));
  
}

//Code for the digital clock

const [date, setDate] = useState(new Date());
  
function refreshClock() {
  setDate(new Date());
}  useEffect(() => {
  const timerId = setInterval(refreshClock, 1000);
  return function cleanup() {
    clearInterval(timerId);
  };
}, []);

  return (

   <>
    <div className='banner'> 
    <div className='info'>this is placeholder info / I will say whatever i need to say here / i aint dead</div>
        <div className='logo'> <img></img></div>
        <div className='topleft'>
        <div className='hour'>| {date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} |</div>
        <div className='volume' onClick={ () => VolumeClick() } >  <FiVolume2 /> </div>
        </div>
       
    </div>
   </>


  );


}
export default Menu;