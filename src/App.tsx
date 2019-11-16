import React from 'react';
import './App.css';
import First from './pages/First/First';
import Second from './pages/Second/Second';
import { handleScroll } from './utils/scroll';

const App: React.FC = () => {
  return (
    <div className="App">
      <First />
      <Second />
    </div>
  );
}

export default App;
