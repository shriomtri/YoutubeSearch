import React, {Component} from 'react';
import {debounce} from 'throttle-debounce';
import Search from './component/Search'

import './css/App.css';

class App extends Component {

    constructor(){
        super();
        this.fetch = debounce(500, this.fetch);
    }

    fetch(value){
        console.log(value)
    }

    userInput(event){
        this.fetch(event.target.value)
    }

    render() {
        return (
            <div className="App">
                <Search onChange={this.userInput.bind(this)}/>
            </div>
        );
    }
}

export default App;
