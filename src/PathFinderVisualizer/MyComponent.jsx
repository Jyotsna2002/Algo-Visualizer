import React from 'react';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import PathFinderVisualizer from './PathFinderVisualizer';
import '../Components/PopUp.css';

export default class MyComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
        showComponentSort:false,
        show1:true,
        show2:true,
        show:true,
      };
      this._onPathClick = this._onPathClick.bind(this);
      this._onSortClick = this._onSortClick.bind(this);
    }
  
    _onPathClick() {
      this.setState({
        showComponent: true,
        showComponentSort: false,
        show1:false,
        show2:true,
        show:false,
      });
    }
    _onSortClick() {
        this.setState({
            showComponentSort: true,
            showComponent: false,
            show2:false,
            show1:true,
            show:false,
            
        });
      }
    render() {
      return (
            <div className='popup'>
                <div className='popup-inner'>
            {this.state.show?<h1>Welcome to the Algorithm Visualizer</h1>:null}
            {this.state.show?<p>
                To Visualize the algorithms choose one of the categories stated as follows:
            </p>:null}
            {this.state.show1?<button id='b1' onClick={this._onPathClick}>Path Finder</button>:null}
            {this.state.showComponent ?
           <PathFinderVisualizer/>:
             null
          }
           {this.state.show2?<button id='b2' onClick={this._onSortClick} >Sorting Visualizer</button>:null}
           {this.state.showComponentSort ?
           <SortingVisualizer/>:
             null
          }
      </div>
    </div>
      );
    }
  }