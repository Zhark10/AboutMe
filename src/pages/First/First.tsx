import React, { useCallback, useEffect } from 'react';
import './First.css';
import Header from '../../content/Header/Header';
import Main from '../../content/Main/Main';
import { handleScroll } from '../../utils/scroll';

const First: React.FC = () => {

  const onScroll = (e: any) => {
    // handleScroll(e, "target2")
    window.removeEventListener('scroll', onScroll);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
  }, [])

  return (
    <div className="first" id="target1">
      <canvas id="matrix" />
      <div style={{ position: 'absolute', zIndex: 2 }}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default First;
