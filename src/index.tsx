import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ColorProvider from './providers/ColorProvider';

ReactDOM.render(
    <ColorProvider>
        <App />
    </ColorProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
