import React from 'react';
import { useState, useEffect, useRef } from "react";

/**
 * Code to display and use the player
 * @return  {React element}             Containers that returns the players display
 */


let audio = new Audio("/Q.mp3")



function Player() {



const [audio_state,set_audio_state] = useState(false)

function play(){


  if (audio_state==false){ 
    console.log("bruh")
    audio.play()
    } 
  else if (audio_state==true){
    console.log("tonium")
    audio.pause()
  }

  set_audio_state(!audio_state)
 
}


  return (
   <>
    <div className='player'>

    <div className='player__controls'> <button className='player__controls__buttons player__controls__previous'></button> 
    <button onClick={play}  className='player__controls__buttons player__controls__play'></button><button className='player__controls__buttons player__controls__next'></button> </div>

    </div>
   </>


  );
}

export default Player;