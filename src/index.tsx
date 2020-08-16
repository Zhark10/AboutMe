import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ColorProvider from "./providers/ColorProvider";
import ScrollProgressProvider from "./providers/ScrollProgressProvider";

ReactDOM.render(
  <ScrollProgressProvider>
    <ColorProvider>
      <App />
    </ColorProvider>
  </ScrollProgressProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
