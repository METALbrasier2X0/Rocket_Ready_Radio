import React from 'react';
import Draggable, {DraggableCore} from "react-draggable";
import { useState, useEffect, useRef } from "react";

import CallApi from './api.js'

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */

import Player from './Player';
import Playlist from './Playlist';
import Menu from './Menu';

function Home() {

  let LinkToFetch = "songlist.json"
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


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
      
      </>
   
   
     );
  ;
  } else { 

      let tracks = items

      
  return (
   <>
    <main className='main-content'>

    <section className='draggableLimit'>

    <Menu></Menu>

      <Draggable> 

        <div className='windows playerContainer'> 
          <Player tracks={tracks}></Player>
        </div>


      </Draggable>


      </section>


    </main>
   </>

  );
}
}

export default Home;