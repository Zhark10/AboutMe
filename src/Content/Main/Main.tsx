import React, { useEffect } from 'react';
import './Main.css';
import { handleScroll } from '../../utils/scroll';
import { game } from './game';
import { initPage } from '../../utils/player';

const Main: React.FC = () => {

    useEffect(()=>{
        initPage()   
    }, [])

    return (
        <div className="first-content">
            <div className="scroll-down" onClick={handleScroll} data-target-id="target2"></div>
            <canvas id="renderer"></canvas>
        </div>
    );
}

export default Main;
