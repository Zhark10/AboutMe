import React, { useContext } from "react";
import "./draggable-player.css";
import Draggable from "react-draggable";
import AudioPlayer from "../audio-player/audio-player";
import { ColorContext } from "../../../../../../ColorProvider";
import { Reference } from "../../../../../../components/shared/note";

const DraggablePlayer = () => {
  const {
    theme: [color],
  } = useContext(ColorContext as any);
  return (
    <Draggable handle=".handle-player" defaultPosition={{ x: 0, y: 0 }}>
        <div className="draggable-player" style={{ borderColor: color }}>
          <AudioPlayer />
        </div>
    </Draggable>
  );
};

export default DraggablePlayer;
