import React     from 'react';
import ReactDOM  from 'react-dom';

import Panelset from './components/Panelset/Panelset.js';
import Viewport from './components/Viewport/Viewport.js';

import './sass/main.scss';

ReactDOM.render(
    <Panelset>
        <div>Toolbar Left</div>
        <Viewport />
        <div>Toolbar Right</div>
    </Panelset>,
    document.getElementById('root')
);