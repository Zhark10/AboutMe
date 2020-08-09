import React, { useEffect, useRef } from "react";
import Header from "./content/Header/CardInfo";
import { matrixRun } from "../../utils/matrix";
import DraggablePlayer from "./content/Header/components/draggable-player/draggable-player";
import Footer from "./content/Footer/Footer";
import DifferentOptions from "../../components/elements/main-page/different-options/different-options";

const MainPart: React.FC = () => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => matrixRun(canvas), []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <canvas ref={canvas} id="matrix" />
      <DraggablePlayer />
      <Header />
      <Footer />
    </div>
  );
};

export default MainPart;
