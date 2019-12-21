import React from 'react';
import './audio-player.css';
import Draggable from 'react-draggable';

const DraggablePlayer = () => {
    return (
        <Draggable
            handle=".handle-player"
            defaultPosition={{ x: 0, y: 0 }}>
            <div className='draggable-player'>
                <div className="handle-player">Drag from here</div>
            </div>
        </Draggable>
    )
}

export default DraggablePlayer;