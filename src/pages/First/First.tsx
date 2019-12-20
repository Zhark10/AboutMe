import React, { useEffect, useContext, useRef } from 'react';
import './First.css';
import Header from '../../content/Header/Header';
import { matrixRun } from '../../utils/matrix';
import { ColorContext } from '../../ColorProvider';

const First: React.FC = () => {
  const { theme: [color] } = useContext(ColorContext as any);
  const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)

  const onScroll = (e: any) => {
    // handleScroll(e, "target2")
  }

  useEffect(()=>matrixRun(canvas), []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div className="first" id="target1">
      <canvas ref={canvas} id="matrix"/>
      <div className="first-content">
        <Header />
      </div>
    </div>
  );
}

export default First;
