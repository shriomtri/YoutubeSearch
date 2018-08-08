import React, {Component} from 'react';
import {debounce} from 'throttle-debounce';
import Search from './component/Search'
import VideoDetail from './component/VideoDetail'
import VideoList from './component/VideoList'
import YTSearch from 'youtube-api-search'

import './css/App.css';

const API_KEY='AIzaSyDAyYIU0uRJadfSwFyYvrEhv86RfTGuqnM';

class App extends Component {

    constructor(){
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.fetch = debounce(500, this.fetch);
        this.fetch("national defence academy")

    }

    fetch(value){
        YTSearch({key:API_KEY, term: value},(data)=>{
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })
        })
    }

    userInput(event){
        this.fetch(event.target.value)
    }

    render() {
        return (
            <div className="App">

                <Search onChange={this.userInput.bind(this)}/>

                <div className="row container output-box">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        list={this.state.videos}
                        onVideoSelected={(video)=>{this.setState({selectedVideo:video})}}/>
                </div>

            </div>
        );
    }
}

export default App;
