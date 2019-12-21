import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainPage />
      <AboutMePage />
    </div>
  );
}

export default App;
