import React, { Component } from 'react';
import './video.css'

export default class Video extends Component {
    componentWillReceiveProps(nextprops){
        if(nextprops.pause!==this.props.pause){
            this.tooglePlay();
        }
    }
    tooglePlay(){
        if(this.props.pause){
            this.video.play();
        }else{
            this.video.pause();
        }
        
    }
    setRef=element=>{
        this.video=element;
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate
        } = this.props;
        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoplay}
                    ref={this.setRef}
                    src={this.props.src}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>

        )
    }
}

