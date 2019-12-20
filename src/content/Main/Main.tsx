import React from 'react';
import './Main.css';
import { handleScroll } from '../../utils/scroll';


const Main: React.FC = () => {
    return (
        <div className="first-content">
            <div className="scroll-down" onClick={handleScroll} data-target-id="target2"></div>
        </div>
    );
}

export default Main;
