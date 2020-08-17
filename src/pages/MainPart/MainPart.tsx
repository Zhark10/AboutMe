import React, { useEffect, useRef, RefObject, useContext } from "react";
import CardInfo from "./content/CardInfo/CardInfo";
import { matrixRun } from "../../utils/matrix";
import DraggablePlayer from "./content/CardInfo/components/draggable-player/draggable-player";
import Footer from "./content/Footer/Footer";
import { useViewportScroll } from "framer-motion";

const MainPart: React.FC = () => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => matrixRun(canvas), []);

  return (
    <div>
    <DraggablePlayer />
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas ref={canvas} id="matrix" />
      <CardInfo />
      <Footer />
    </div>
    </div>
  );
};

export default MainPart;
