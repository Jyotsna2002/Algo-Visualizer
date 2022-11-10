import React, {Component} from 'react';
import Node from './Node/Node';

import './PathFinderVisualizer.css';

export default class PathFinderVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
             Hello
                <Node></Node>

            </div>
        );
    }
}