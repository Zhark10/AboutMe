import React, { useEffect, useRef } from 'react';
import './MainPage.css';
import Header from '../AboutMePage/content/Header/Header';
import { matrixRun } from '../../utils/matrix';
import DraggablePlayer from '../../components/elements/main-page/header/audio-player/draggable-player';
import DifferentOptions from '../../components/elements/main-page/different-options/different-options';

const MainPage: React.FC = () => {
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

export default MainPage;
