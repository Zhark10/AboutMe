import React, { useEffect, useRef, useState, useContext } from 'react';
import './Header.css';
import { matrixRun } from '../../utils/matrix';
import Typical from 'react-typical';
import MenuOptions from '../../components/elements/header/menu-options/menu-options';
import ReactCardFlip from 'react-card-flip';
import { ITrack } from './models/models.types';
import { TRACKS, PHONE, MESSAGES } from './models/models';
import { initAudioPlayer } from '../../utils/player';
import { ColorContext } from '../../ColorProvider';
import NoteSvg from '../../components/elements/header/note-svg/note-svg';
import Cable from '../../components/shared/cable';
import ProfileInfo from '../../components/elements/header/profile-info/profile-info';
import AudioPlayer from '../../components/elements/header/audio-player/audio-player';

const Header: React.FC = () => {

    const {
        theme: [color, setColor]
    } = useContext(ColorContext as any);

    useEffect(matrixRun, []);



    return (
        <div id="header" >
            <div className="fasteners">
                <Cable length={30} color={color} />
                <div style={{ marginRight: 150, zIndex: 4 }}>
                    <Cable length={30} color={color} />
                </div>
            </div>
            <div className="box-header">
                <div className="profile-card" >

                    <ProfileInfo />

                    <AudioPlayer color={color} setColor={setColor}/>

                </div>
                <MenuOptions color={color} />
            </div>
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
