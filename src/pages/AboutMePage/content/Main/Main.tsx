import React from 'react';
import './Main.css';
import { handleScroll } from '../../../../utils/scroll';
import CustomBox from '../../../../components/elements/main/custom-box/custom-box';

const Main: React.FC = () => {
    return (
        <div className="first-content">
            <CustomBox />
            <div className="scroll-down" onClick={handleScroll} data-target-id="target2"></div>
        </div>
    );
}

export default Main;
