import React, { useEffect, useRef } from 'react';
import './MainPart.css';
import Header from './content/Header/Header';
import { matrixRun } from '../../utils/matrix';
import DraggablePlayer from '../../components/elements/main-page/header/draggable-player/draggable-player';
import DifferentOptions from '../../components/elements/main-page/different-options/different-options';

const MainPart: React.FC = () => {
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)

  const onScroll = (e: any) => {
    // handleScroll(e, "target2")
  }

  useEffect(() => matrixRun(canvas), []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div className="main-page" id="target1">
      <DraggablePlayer />
      <DifferentOptions />
      <canvas ref={canvas} id="matrix" />
      <Header />
      {/* <Main /> */}
    </div>
  );
}

export default MainPart;
