import React, { useContext } from "react";
import "./draggable-player.css";
import AudioPlayer from "../audio-player/audio-player";
import { ColorContext } from "../../../../../../providers/ColorProvider";
import { motion, useViewportScroll } from "framer-motion";

const DraggablePlayer = () => {
  const {
    theme: [color],
  } = useContext(ColorContext as any);
  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }}
      className="draggable-player"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ x: 5, y: 5, borderColor: color }}
    >
      <AudioPlayer />
    </motion.div>
  );
};

export default DraggablePlayer;
