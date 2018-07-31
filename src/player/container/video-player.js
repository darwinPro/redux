import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Control from '../components/video-player-control'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/full-screen';
import {connect} from 'react-redux';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }
    tooglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        //console.log(this.video.currentTime);
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    leftPad = numero => {
        const pad = '00';
        return pad.substring(0, pad.length - numero.length) + numero;
    }
    formatedTime = secons => {
        const minutos = parseInt(secons / 60, 10)
        const seconss = parseInt(secons % 60, 10)
        return `${minutos} : ${this.leftPad(seconss.toString())}`
    }
    handleProgressChangue = event => {
        //event.target.value
        this.video.currentTime = event.target.value;
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumenChangue = event => {
        this.video.volume = event.target.value;
    }

    handleFullScreenClick = event => {
        if (!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen)) {
            this.setfullScreen(this.player);
        } else {
            this.exitFullScreeen();
        }
    }

    setfullScreen = element => {
        try { element.requestFullscreen() } catch (e) {
            try { element.webkitRequestFullscreen() } catch (e) {
                try { element.mozRequestFullscreen() } catch (e) {
                    try { element.msRequestFullscreen() } catch (e) {
                        console.log(e)
                    }
                }
            }
        }
    }

    exitFullScreeen = () => {
        try { document.exitFullscreen() } catch (e) {
            try { document.webkitExitFullscreen() } catch (e) {
                try { document.mozCancelFullscreen() } catch (e) {
                    try { document.msExitFullscreen() } catch (e) {
                        console.log(e)
                    }
                }
            }
        }

    }

    setRef = elelemnt => {
        this.player = elelemnt;
    }
    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >

                <Title
                    title={this.props.media.get('title')}
                />
                <Control>
                    <PlayPause
                        pause={this.state.pause}
                        hadleClick={this.tooglePlay}
                    />
                    <Timer
                        duration={this.formatedTime(this.state.duration)}
                        currentTime={this.formatedTime(this.state.currentTime)}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChangue={this.handleProgressChangue}
                    />
                    <Volumen
                        handleVolumenChangue={this.handleVolumenChangue}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Control>
                <Spinner
                    active={this.state.loading}
                />

                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.media.get('src')}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToPros(state, props){
    return{
        media: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect (mapStateToPros)(VideoPlayer);