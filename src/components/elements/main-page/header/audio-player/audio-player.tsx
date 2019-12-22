import React, { FC, useEffect, useState, useRef, useContext } from 'react';
import './audio-player.css';
import ReactCardFlip from 'react-card-flip';
import NoteSvg from '../note-svg/note-svg';
import { initAudioPlayer } from '../../../../../utils/player';
import { TRACKS } from '../../../../../pages/AboutMePage/content/Header/models/models';
import { ITrack } from '../../../../../pages/AboutMePage/content/Header/models/models.types';
import { ColorContext } from '../../../../../ColorProvider';
import Loader from 'react-loader-spinner';
import { COLORS } from '../../../../../global/colors';

const AudioPlayer: FC = () => {
    const audio: React.RefObject<HTMLAudioElement> = useRef(null)
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)

    const { theme: [color, setColor] } = useContext(ColorContext as any);
    const [isFlipped, setFlipped] = useState(false);
    const [track, setTrack] = useState(null as ITrack | null);
    const isBrowserSupported = !!((window as any).AudioContext || (window as any).webkitAudioContext);

    useEffect(() => {
        if (isBrowserSupported && track && track.src) {
            initAudioPlayer(track.src, canvas, setColor, audio)
            setTimeout(() => {
                setFlipped(true);
                setTimeout(() => setFlipped(false), 4000);
            }, 4000);
        } else {
            let current = TRACKS[Math.floor(Math.random() * TRACKS.length)];
            setTrack(current)
        }
    }, [track, setColor, isBrowserSupported]);

    const handleClick = (e: any) => {
        e.preventDefault();
        setFlipped(isFlipped => !isFlipped);
    }

    return (
        isBrowserSupported ?
            track ?
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
                    <div className="player" onClick={handleClick}>
                        <div className="music-title" style={{ color }}>My top music today</div>
                        <canvas ref={canvas} />
                        <audio ref={audio} autoPlay preload={'.load'} />
                    </div>
                    <div className="player" onClick={handleClick}>
                        <div className="back-side-flip">
                            <div className="music-title" style={{ color }}>Author: {track!.author}</div>
                            <div className="music-title" style={{ color }}>Title: "{track!.title}"</div>
                            <NoteSvg color={color} />
                        </div>
                    </div>
                </ReactCardFlip>
                :
                <div className="player">
                    <Loader
                        type="Audio"
                        color={COLORS.main}
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
            :
            <div>Unsupported</div>
    );
}

export default AudioPlayer;

