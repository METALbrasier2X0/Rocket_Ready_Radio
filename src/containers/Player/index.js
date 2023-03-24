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

  const [audio_state,set_audio_state] = useState(false)
  const [track, setTrack] = useState(props.tracks[0]);
  const [title, setTitle] = useState(props.tracks[0].title);
  const [audio, setAudio] = useState(new Audio(props.tracks[0].url));
  const id = useRef(0);

  // Function to generate random number
function randomNumber(min, max, excluded) {
  var n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) n++;
  console.log("return is" +n)
  console.log(excluded)
  return n;
}

  useEffect(() => {
    setTitle(track.title);
    setAudio(new Audio(track.url));
    id.current = track.id;
  },  [track] );
  

  useEffect(() => {
    if(audio_state == false){}
    else{console.log(audio)
      KeepPlaying()
    }
  },  [audio] );


  function KeepPlaying(){
    audio.play()
  }


function play(){
  if (audio_state==false){ 
    audio.play()
    } 
  else if (audio_state==true){
    audio.pause()
  }

  set_audio_state(!audio_state)
}

function back(){

  if (audio.currentTime < 0.5 ){ 
    audio.pause()
    setTrack(props.tracks[0])
   
  } else {
  console.log (audio.currentTime);
  audio.currentTime = 0; 
  }
  
}

function forward(){
  audio.pause();
  console.log(id.current + "is fobidden")
  let nextId = randomNumber(0, 2, id.current)
  setTrack(props.tracks[nextId]) 
}

function changeTrack(track){
  setTitle(track.title);
  setAudio(new Audio(track.url));
}


audio.onended = function() {
  let nextId = randomNumber(0, 2, id.current)
  setTrack(props.tracks[nextId])
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