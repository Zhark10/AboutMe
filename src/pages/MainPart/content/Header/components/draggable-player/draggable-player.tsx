import React from 'react';
import './draggable-player.css';
import Draggable from 'react-draggable';
import AudioPlayer from '../audio-player/audio-player';

const DraggablePlayer = () => {
    return (
        <Draggable
            handle=".handle-player"
            defaultPosition={{ x: 10, y: 10 }}>
            <div className='draggable-player'>
                {/* <div className="handle-player">Drag from here</div> */}
                <AudioPlayer />
            </div>
        </Draggable>
    )
}

export default DraggablePlayer;