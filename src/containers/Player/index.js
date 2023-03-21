import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { FiRewind } from "react-icons/fi";
import { FiFastForward } from "react-icons/fi";


/**
 * Code to display and use the player
 * @return  {React element}             Containers that returns the players display
 */


let audio = new Audio("/Q.mp3")
let title = "Q's Theme"


function Player() {

const [audio_state,set_audio_state] = useState(false)

function play(){

  if (audio_state==false){ 
    audio.play()

    } 
  else if (audio_state==true){
    audio.pause()
  }

  set_audio_state(!audio_state)
 
}

audio.onended = function() {
  alert("The audio has ended");
}; 


function back(){

  console.log (audio.currentTime);
  audio.currentTime = 0; 
 
}

audio.onended = function() {
  alert("The audio has ended");
}; 


  return (


   <>
    <div className='player'>

    <div className='player__controls'> <button onClick={back} className='player__controls__buttons player__controls__previous'> <FiRewind /> </button> 
    <button onClick={play}  className='player__controls__buttons player__controls__play'> {audio_state == false && <FiPlay /> } {audio_state == true && <FiPause /> }  </button><button className='player__controls__buttons player__controls__next'> <FiFastForward />  </button> </div>

    <div className='player__display'> <div className='player__display__title'> {title}  </div> </div>  
    </div>
   </>


  );
}

export default Player;