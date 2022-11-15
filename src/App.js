import React from 'react';
import './App.css';
import PopUp from './Components/PopUp';
import MyComponent from './PathFinderVisualizer/MyComponent';
import PathFinderVisualizer from './PathFinderVisualizer/PathFinderVisualizer';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
    
      <MyComponent></MyComponent>
        {/* <button onClick={() =>
             }>
          Pathfinder
        </button> */}
{/*       
        <button onClick={() =>
        <SortingVisualizer></SortingVisualizer>
       }>
          SortingVisualizer
        </button>
       */}
    </div>
  );
}

export default App;
