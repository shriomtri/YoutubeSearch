import React from 'react';
import VideoItem from '../component/VideoListItem'
import '../css/video_list.css'

const VideoList = (props) => {

    const videoItems = props.list.map((video)=>{
        return(
            <VideoItem
                onVideoSelected={props.onVideoSelected}
                video={video}
                key={video.etag}

            />
        );
    });

    return (
        <div className="col-md-4 current-container ">
            {videoItems}
        </div>
    );
};

export default VideoList;