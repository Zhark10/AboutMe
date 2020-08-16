import React, { useRef, RefObject, useContext, useEffect } from "react";
import "./App.css";
import MainPart from "./pages/MainPart/MainPart";
import { useViewportScroll } from "framer-motion";
import { ScrollProgressContext } from "./providers/ScrollProgressProvider";

const App: React.FC = () => {
  return (
    <div className="App">
      <MainPart />
    </div>
  );
};

export default App;
