import React, { useContext } from "react";
import "./draggable-player.css";
import Draggable from "react-draggable";
import AudioPlayer from "../audio-player/audio-player";
import { ColorContext } from "../../../../../../ColorProvider";

const DraggablePlayer = () => {
  const {
    theme: [color],
  } = useContext(ColorContext as any);
  return (
    <>
      <Draggable handle=".handle-player" defaultPosition={{ x: 10, y: 10 }} >
        <div className="draggable-player" style={{borderColor: color}}>
          {/* <div className="handle-player">Drag from here</div> */}
          <AudioPlayer />
        </div>
      </Draggable>
    </>
  );
};

export default DraggablePlayer;
