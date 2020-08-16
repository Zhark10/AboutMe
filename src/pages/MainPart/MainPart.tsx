import React, { useEffect, useRef, RefObject, useContext } from "react";
import CardInfo from "./content/CardInfo/CardInfo";
import { matrixRun } from "../../utils/matrix";
import DraggablePlayer from "./content/CardInfo/components/draggable-player/draggable-player";
import Footer from "./content/Footer/Footer";
import { useViewportScroll } from "framer-motion";
import { ScrollProgressContext } from "../../providers/ScrollProgressProvider";

const MainPart: React.FC = () => {
  const ref: RefObject<any> = useRef();
  const { scrollYProgress } = useViewportScroll();
  const {
    scroll: [setScrollProgress],
  } = useContext(ScrollProgressContext as any);

  useEffect(
    function scrollWatcher() {
        setScrollProgress(scrollYProgress);
    },
    [scrollYProgress]
  );

  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => matrixRun(canvas), []);

  return (
    <div ref={ref}>
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
