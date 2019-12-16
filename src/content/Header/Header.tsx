import React, { useEffect, useRef, useState, useContext } from 'react';
import './Header.css';
import { matrixRun } from '../../utils/matrix';
import Typical from 'react-typical';
import MenuOptions from '../../elements/header/menu-options/menu-options';
import ReactCardFlip from 'react-card-flip';
import { ITrack } from './models/models.types';
import { TRACKS, PHONE, MESSAGES } from './models/models';
import { initAudioPlayer } from '../../utils/player';
import { ColorContext } from '../ColorProvider/ColorProvider';
import NoteSvg from '../../elements/header/note-svg/note-svg';

const Header: React.FC = () => {
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)
    const [isFlipped, setFlipped] = useState(false);
    const [track, setTrack] = useState(null as ITrack | null);

    const {
        theme: [color, setColor]
    } = useContext(ColorContext as any);

    useEffect(matrixRun, []);

    useEffect(() => {
        if (track && track.src) {
            initAudioPlayer(track.src, canvas, setColor)
            setTimeout(() => {
                setFlipped(true);
                setTimeout(() => setFlipped(false), 2000);
            }, 2000);
        } else {
            let current = TRACKS[Math.floor(Math.random() * TRACKS.length)];
            setTrack(current)
        }
    }, [track, setColor]);

    const handleClick = (e: any) => {
        e.preventDefault();
        setFlipped(isFlipped => !isFlipped);
    }

    return (
        track &&
        <>
            <div id="header">
                <div className="box-header">
                    <div className="profile-card" style={{ borderLeftWidth: '5px', borderLeftColor: 'red' }}>
                        <div className="image" />
                        <div className="info">
                            <div className="title">Zharavin Arkady</div>
                            <div className="description">frontent-developer of the company <img width={150} height={18} src={require('../../images/citronium.png')} alt="Citronium" />, 24 y.o.</div>
                            <div className="description"><strong>My skills:</strong> TS, JS, React, RN, AngularJS, Redux, HTML5, CSS3, SASS, Webpack, git, etc.</div>
                            <div className="melody">
                                {PHONE.map((item: string) => (
                                    <div className="note">{item}</div>
                                ))}
                            </div>
                        </div>


                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
                            <div className="player" onClick={handleClick}>
                                <div className="music-title" style={{ color }}>My top music today</div>
                                <canvas ref={canvas} />
                            </div>
                            <div className="player" onClick={handleClick}>
                                <div className="back-side-flip">
                                    <div className="music-title" style={{ color }}>Author: {track!.author}</div>
                                    <div className="music-title" style={{ color }}>Title: "{track!.title}"</div>
                                    <NoteSvg color={color} />
                                </div>
                            </div>
                        </ReactCardFlip>

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
        </>
    );
}

export default Header;
