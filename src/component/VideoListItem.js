import React from 'react'
import '../css/video_list_item.css'

const VideoItem = (props) => {

    const singleVideo = props.video;

    return (
        <div className="row video-tile" onClick={()=> props.onVideoSelected(props.video)}>
                <div className="col-md-4 col-md-offset-1">
                    <img src={singleVideo.snippet.thumbnails.default.url}/>
                </div>

                <div className="col-md-6">
                    <h6>{singleVideo.snippet.title}</h6>
                </div>
        </div>
    );
};

export default VideoItem;