import React, { useEffect, useRef } from "react";
import "./MainPart.css";
import Header from "./content/Header/Header";
import { matrixRun } from "../../utils/matrix";
import DraggablePlayer from "./content/Header/components/draggable-player/draggable-player";
import Footer from "./content/Footer/Footer";
import DifferentOptions from "../../components/elements/main-page/different-options/different-options";

const MainPart: React.FC = () => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => matrixRun(canvas), []);

  return (
    <div className="main-page">
      <DraggablePlayer />
      <canvas ref={canvas} id="matrix" />
      <Header />
      <Footer/>
    </div>
  );
};

export default MainPart;
