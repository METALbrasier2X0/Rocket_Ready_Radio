import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { FiRewind } from "react-icons/fi";
import { FiFastForward } from "react-icons/fi";
import CallApi from '../api.js'


/**
 * Code to display and use the player
 * @return  {React element}             Containers that returns the players display
 */


function Player(props) {

 

  let track = props.tracks[0];

  const [audio_state,set_audio_state] = useState(false)
  const [id, setId] = useState(0);
  const [title, setTitle] = useState(track.title);
  const [audio, setAudio] = useState(new Audio(track.url));

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

function forward(){
  track = props.tracks[1];
  console.log(track)
  setTitle(track.title)
  setAudio(new Audio(track.url))
}


audio.onended = function() {
  alert("The audio has ended");
}; 

  return (

   <>
    <div className='player'>

    <div className='player__controls'> <button onClick={back} className='player__controls__buttons player__controls__previous'> <FiRewind /> </button> 
    <button onClick={play}  className='player__controls__buttons player__controls__play'> {audio_state == false && <FiPlay /> } {audio_state == true && <FiPause /> }  </button><button onClick={forward} className='player__controls__buttons player__controls__next'> <FiFastForward />  </button> </div>

    <div className='player__display'> <div className='player__display__title'> {title} </div> </div>  
    </div>
   </>


  );


}
export default Player;