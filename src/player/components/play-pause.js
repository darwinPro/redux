import React from 'react';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import './play-pause.css'

function PlayPause(props) {
    return (
        <div className="PlayPause">
            {
                props.pause ?
                    <button
                        onClick={props.hadleClick}
                    >
                        <Play size={25} color="white" />
                    </button> 
                    :
                    <button
                        onClick={props.hadleClick}
                    >
                        <Pause size={25} color="white" />
                    </button>
            }



        </div>
    )
}
export default PlayPause;
