import React, { FC, useEffect, useState, useRef, useContext } from "react";
import "./audio-player.css";
import ReactCardFlip from "react-card-flip";
import NoteSvg from "../note-svg/note-svg";
import { initAudioPlayer } from "../../../../../../utils/player";
import { ITrack } from "../../models/models.types";
import { ColorContext } from "../../../../../../providers/ColorProvider";
import Loader from "react-loader-spinner";
import { COLORS } from "../../../../../../global/colors";

const TRACKS: ITrack[] = [
  {src: require('../../resources/Alter_Ego.mp3'), author: "N'to", title: "Alter Ego"},
  {src: require('../../resources/Ghinzu.mp3'), author: "Ghinzu", title: "21st Century Crooners"},
]

const AudioPlayer: FC = () => {
  const audio: React.RefObject<HTMLAudioElement> = useRef(null);
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

  const {
    theme: [color, setColor],
  } = useContext(ColorContext as any);
  const [isFlipped, setFlipped] = useState(false);
  const [track, setTrack] = useState(null as ITrack | null);
  const isBrowserSupported = !!(
    (window as any).AudioContext || (window as any).webkitAudioContext
  );

  useEffect(() => {
    const isAudioLoaded =
      isBrowserSupported && track?.src && audio && canvas;
    if (isAudioLoaded) {
      initAudioPlayer(track?.src, canvas, setColor, audio);
      setTimeout(() => {
        setFlipped(true);
        setTimeout(() => setFlipped(false), 4000);
      }, 4000);
    } else {
      let current = TRACKS[Math.floor(Math.random() * TRACKS.length)];
      setTrack(current);
    }
  }, [track, setColor, isBrowserSupported]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setFlipped((isFlipped) => !isFlipped);
  };

  return isBrowserSupported ? (
    track ? (
      <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="player" onClick={handleClick}>
            <canvas ref={canvas} />
            <audio ref={audio} autoPlay />
          </div>
          <div className="player" onClick={handleClick}>
            <div className="back-side-flip">
              <div className="music-title" style={{ color, marginBottom: 18 }}>
                {track!.author}: "{track!.title}"
              </div>
              <NoteSvg color={color}/>
            </div>
          </div>
        </ReactCardFlip>
        <div
          className="handle-player"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          onClick={handleClick}
        />
      </>
    ) : (
      <div className="player">
        <Loader
          type="Audio"
          color={COLORS.main}
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  ) : (
    <div>Unsupported</div>
  );
};

export default AudioPlayer;
