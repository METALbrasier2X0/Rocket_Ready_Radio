import React from 'react';
import { useState, useEffect, useRef } from "react";

import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { FiRewind } from "react-icons/fi";
import { FiFastForward } from "react-icons/fi";
import CallApi from './api.js'


/**
 * Code to display and use the player
 * @return  {React element}             Containers that returns the players display
 */


function Player() {

  const [audio_state,set_audio_state] = useState(false)

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let id = 0;

  let LinkToFetch = "songlist.json"
  

  useEffect(() => {
    CallApi(LinkToFetch)
       .then(
         (result) => {
           setIsLoaded(true);
           setItems(result);
         },
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       )
   }, [])



   if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    items["data"] = {sessions: [], keyData: ""};
    return (

      <>
       <div className='player'>
   
       <div className='player__controls'> <button className='player__controls__buttons player__controls__previous'> <FiRewind /> </button> 
       <button className='player__controls__buttons player__controls__play'> {audio_state == false && <FiPlay /> } {audio_state == true && <FiPause /> }  </button><button  className='player__controls__buttons player__controls__next'> <FiFastForward />  </button> </div>
   
       <div className='player__display'> <div className='player__display__title'>  </div> </div>  
       </div>
      </>
   
   
     );
  ;
  } else { 

    let currentTrack = items[id]
    let audio = new Audio(currentTrack.url);
    let title = currentTrack.title;


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

  id++ ;
  let audio = new Audio(currentTrack.url);
  let title = currentTrack.title;
  console.log(id)

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

}
export default Player;