import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiVolume2 } from "react-icons/fi";
import { FiVolume1 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";

/**
 * Code to display the menu
 * @return  {React element}             Containers that returns the menu
 */

function Menu(props) {
  
  var today = new Date();

  const [Time, setTime] = useState(today.getHours() + ':' + today.getMinutes());
  const [Volume, setVolume] = useState(null);

  setInterval(() => setTime(today.getHours() + ':' + today.getMinutes() ), 1000);

  return (

   <>
    <div className='banner'> 
    <div className='info'>this is placeholder info / I will say whatever i need to say here / i aint dead</div>
        <div className='logo'> <img></img></div>
        <div className='topleft'>
        <div className='hour'>| {Time} |</div>
        <div className='volume'> <FiVolume2 /> </div>
        </div>
       
    </div>
   </>


  );


}
export default Menu;