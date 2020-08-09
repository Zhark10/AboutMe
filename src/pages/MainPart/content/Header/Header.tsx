import React, { useContext } from 'react';
import './Header.css';
import Typical from 'react-typical';
import MenuOptions from './components/menu-options/menu-options';
import { MESSAGES } from './models/models';
import { ColorContext } from '../../../../ColorProvider';
import Cable from '../../../../components/shared/cable';
import ProfileInfo from './components/profile-info/profile-info';
import AudioPlayer from './components/audio-player/audio-player';

const Header: React.FC = () => {

    const { theme: [color] } = useContext(ColorContext as any);

    return (
        <div id="header" >
            <div className="type-text" style={{ color }}>
                <Typical
                    steps={MESSAGES}
                    loop={Infinity}
                    wrapper="div"
                />
            </div>
        </div>
    );
}

export default Header;
