import React, { FC, useEffect, useState, useRef, useContext } from 'react';
import './audio-player.css';
import ReactCardFlip from 'react-card-flip';
import NoteSvg from '../note-svg/note-svg';
import { initAudioPlayer } from '../../../../utils/player';
import { TRACKS } from '../../../../pages/AboutMePage/content/Header/models/models';
import { ITrack } from '../../../../pages/AboutMePage/content/Header/models/models.types';
import { ColorContext } from '../../../../ColorProvider';

const AudioPlayer: FC = () => {
    const { theme: [color, setColor] } = useContext(ColorContext as any);
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)
    const [isFlipped, setFlipped] = useState(false);
    const [track, setTrack] = useState(null as ITrack | null);

    useEffect(() => {
        if (track && track.src) {
            initAudioPlayer(track.src, canvas, setColor)
            setTimeout(() => {
                setFlipped(true);
                setTimeout(() => setFlipped(false), 4000);
            }, 4000);
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
    );
}

export default AudioPlayer;

