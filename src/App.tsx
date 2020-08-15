import React, { useRef, RefObject } from 'react';
import './App.css';
import MainPart from './pages/MainPart/MainPart';
import { useViewportScroll } from 'framer-motion';

const App: React.FC = () => {
  const ref: RefObject<any> = useRef()
  const { scrollYProgress } = useViewportScroll();

  return (
    <div ref={ref} className="App">
      <MainPart />
    </div>
  );
}

export default App;
