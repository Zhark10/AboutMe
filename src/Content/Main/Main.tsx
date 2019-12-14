import React, { useEffect, useRef } from 'react';
import './Main.css';
import { handleScroll } from '../../utils/scroll';
import { initPage } from '../../utils/player';
const musicSrc = require('../../resources/Ghinzu.mp3');
// const musicSrc = require('../../resources/Alter_Ego.mp3');


const Main: React.FC = () => {

    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)
    useEffect(()=>{
        initPage(musicSrc, canvas)   
    }, [])

    return (
        <div className="first-content">
            <div className="scroll-down" onClick={handleScroll} data-target-id="target2"></div>
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default Main;
