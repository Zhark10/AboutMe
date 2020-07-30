import React from 'react';
import './draggable-player.css';
import Draggable from 'react-draggable';

const DraggablePlayer = () => {
    return (
        <Draggable
            handle=".handle-player"
            defaultPosition={{ x: 10, y: 10 }}>
            <div className='draggable-player'>
                <div className="handle-player">Drag from here</div>
            </div>
        </Draggable>
    )
}

export default DraggablePlayer;