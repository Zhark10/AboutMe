import React, { useEffect } from 'react';
import './First.css';
import Header from '../../content/Header/Header';
import Main from '../../content/Main/Main';

const First: React.FC = () => {

  const onScroll = (e: any) => {
    // handleScroll(e, "target2")
  }
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <div className="first" id="target1">
      <canvas id="matrix" />
      <div className="first-content">
        <Header />
      </div>
    </div>
  );
}

export default First;
