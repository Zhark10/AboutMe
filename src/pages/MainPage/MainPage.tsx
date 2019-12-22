import React, { useEffect, useContext, useRef } from 'react';
import './MainPage.css';
import Header from '../AboutMePage/content/Header/Header';
import { matrixRun } from '../../utils/matrix';
import { ColorContext } from '../../ColorProvider';
import Main from '../AboutMePage/content/Main/Main';
import DraggablePlayer from '../../components/elements/header/audio-player/draggable-player';

const MainPage: React.FC = () => {
  const { theme: [color] } = useContext(ColorContext as any);
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
      <canvas ref={canvas} id="matrix" />
      <Header />
      {/* <Main /> */}
    </div >
  );
}

export default MainPage;
