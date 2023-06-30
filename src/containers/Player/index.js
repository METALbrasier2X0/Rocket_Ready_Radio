import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { FiRewind } from "react-icons/fi";
import { FiFastForward } from "react-icons/fi";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";

import { storeToken, clearToken, askToken } from '../Session/userSession'
import { useSelector, useDispatch } from 'react-redux'

import { WaveSurfer, WaveForm, Region, Marker } from "wavesurfer-react";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.min";

import CallApi from '../api.js'


/**
 * Code to display and use the player
 * @return  {React element}             Containers that returns the players display
 */

function Player(props) {

  const [audio_state,set_audio_state] = useState(false)
  const [track, setTrack] = useState(props.tracks[0]);
  const [title, setTitle] = useState(props.tracks[0].title);
  const [display, setDisplay] = useState(false);
  const [audio, setAudio] = useState(new Audio(props.tracks[0].url));
  const [Volume, setVolume] = useState(1);
  const id = useRef(0);
  

  const plugins = [
    {
       plugin: TimelinePlugin,
       options: {
          container: "#timeline"
       }
    },
    {
       plugin: CursorPlugin
    }

 ];

 audio.volume = Volume;

  // Function to generate random number
function randomNumber(min, max, excluded) {
  var n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) n++;
  console.log("return is" +n)
  console.log(excluded)
  return n;
}

let UserVolume = useSelector(askToken).payload.Token.value

useEffect(() => {
  setVolume(UserVolume)
},  [useSelector(askToken).payload.Token.value] );

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

      <div className='playerContainer'>
    <div className='playerContainer__controls'> <button onClick={back} className='playerContainer__controls__buttons player__controls__previous'> <FiRewind /> </button> 
    <button onClick={play}  className='playerContainer__controls__buttons player__controls__play'> {audio_state == false && <FiPlay /> } {audio_state == true && <FiPause /> }  </button><button onClick={forward} className='playerContainer__controls__buttons player__controls__next'> <FiFastForward />  </button> </div>

    <div className='playerContainer__display'> <div className='playerContainer__display__title noselect'> {title} </div> </div>  
    </div>


    <div onClick={ function(event){ setDisplay(!display);} } className='displayIcon'> {display == false && <TfiAngleDown/> } {display == true && <TfiAngleUp/> }</div >

    {display&& <WaveSurfer plugins={plugins} />}


    </div>
   </>


  );


}
export default Player;