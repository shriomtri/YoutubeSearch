import React from 'react'

const VideoItem = (props) => {

    const singleVideo = props.video;

    return (
        <div className="row card" onClick={()=> props.onVideoSelected(props.video)}>
                <div className="col-md-4 col-md-offset-1">
                    <img src={singleVideo.snippet.thumbnails.default.url}/>
                </div>

                <div className="col-md-6">
                    {singleVideo.snippet.title}
                </div>
        </div>
    );
};

export default VideoItem;