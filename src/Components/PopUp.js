import React from 'react'
import '../Components/PopUp.css';
import PathFinderVisualizer from '../PathFinderVisualizer/PathFinderVisualizer';
function PopUp(prop) {
  return(prop.triger)? (
    <div className='popup'>
        <div className='popup-inner'>
        <h1>Welcome to the Algorithm Visualizer</h1>
            <p>
                To Visualize the algorithms choose one categary stated as follows:
            </p>
            <div id='b1'>
            <button onClick={<PathFinderVisualizer></PathFinderVisualizer>}>PathFinder</button>
            </div>
          
         <button id='b2'>SortingVisualizer</button>
        </div>
      
    </div>
  ):""
}

export default PopUp
