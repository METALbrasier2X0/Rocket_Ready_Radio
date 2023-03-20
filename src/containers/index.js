import React from 'react';
import Draggable, {DraggableCore} from "react-draggable";

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */

import Player from './Player';

function Home() {

  return (
   <>
    <main className='main-content'>

    <section className='draggableLimit'>


      <Draggable> 

        <div className='windows'> 
          <Player></Player>
        </div>


      </Draggable>


      </section>


    </main>
   </>

  );
}

export default Home;