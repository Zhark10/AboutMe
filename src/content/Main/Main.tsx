import React from 'react';
import './Main.css';
import { handleScroll } from '../../utils/scroll';
import Cable from '../../components/shared/cable';


const Main: React.FC = () => {
    return (
        <div className="first-content">
            <div className="my-custom-box">
                <Cable length={60} />
                {/* <CustomBox /> */}
            </div>
            <div className="scroll-down" onClick={handleScroll} data-target-id="target2"></div>
        </div>
    );
}

export default Main;
