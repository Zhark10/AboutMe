import React, { useEffect, useRef, useState, useContext } from 'react';
import './Header.css';
import { matrixRun } from '../../utils/matrix';
import Typical from 'react-typical';
import MenuOptions from '../../elements/header/menu-options/MenuOptions';
import ReactCardFlip from 'react-card-flip';
import { ITrack } from './models/models.types';
import { TRACKS, PHONE, MESSAGES } from './models/models';
import { initAudioPlayer } from '../../utils/player';
import { ColorContext } from '../ColorProvider/ColorProvider';


const Header: React.FC = () => {
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)
    const [isFlipped, setFlipped] = useState(false);
    const [track, setTrack] = useState(null as ITrack | null);
    const {
        theme: [color, setColor]
    } = useContext(ColorContext as any);

    useEffect(() => matrixRun(color), [])

    useEffect(() => {

        if (track && track.src) {
            initAudioPlayer(track.src, canvas, setColor)

            setTimeout(() => {
                setFlipped(true);
                setTimeout(() => {
                    setFlipped(false)
                }, 2000);
            }, 2000);
        } else {
            setTrack(TRACKS[1])
        }
    }, [track])

    const handleClick = (e: any) => {
        e.preventDefault();
        setFlipped(isFlipped => !isFlipped);
    }

    return (
        <>
            <div id="header">
                <div className="box-header">
                    <div className="profile-card">
                        <div className="image" />
                        <div className="info">
                            <div className="title">Zharavin Arkady</div>
                            <div className="description">frontent-developer of the company <img width={150} height={18} src={require('../../images/citronium.png')} alt="Citronium" />, 24 y.o.</div>
                            <div className="description"><strong>My skills:</strong> TS, JS, React, RN, AngularJS, Redux, HTML5, CSS3, SASS, Webpack, git, etc.</div>
                            <div className="melody">
                                {PHONE.map((item: string) => (
                                    <div className="note" style={{color: color}}>{item}</div>
                                ))}
                            </div>
                        </div>


                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
                            <div className="player" onClick={handleClick}>
                                <div className="music-title" style={{color: color}}>My top music today</div>
                                <canvas ref={canvas} />
                            </div>
                            <div className="player" onClick={handleClick}>
                                <div className="back-side-flip">
                                    <div className="music-title" style={{color: color}}>Author: N'to</div>
                                    <div className="music-title" style={{color: color}}>Title: "Alter Ego"</div>
                                </div>
                            </div>
                        </ReactCardFlip>

                    </div>
                    <MenuOptions color={color}/>
                </div>
                <div className="type-text">
                    <Typical
                        steps={MESSAGES}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </>
    );
}

export default Header;
