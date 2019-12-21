import React from 'react';
import './custom-box.css';
import Cable from '../../../shared/cable';
import Draggable from 'react-draggable';

const CustomBox = () => (
    <div className="my-custom-box">
        <Cable length={40} />
        <div className="custom-box" >
        </div>
    </div>
);

export default CustomBox;

