import React from 'react';
import '../components/video-player-layout.css'

const VideoPlayerLayout = props =>(
    <div 
    ref={props.setRef}
    className="VideoPlayer"
    >
        {props.children}
    </div>
)

export default VideoPlayerLayout;