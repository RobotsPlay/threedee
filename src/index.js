import React     from 'react';
import ReactDOM  from 'react-dom';

import Panelset from './components/Panelset/Panelset.js';
import Viewport from './components/Viewport/Viewport.js';

import './sass/main.scss';

ReactDOM.render(
    <Panelset>
        <div>Toolbar Left</div>
        <Viewport />
        <Panelset direction="vert">
            <div>Upper Panel</div>
            <div>Lower Panel</div>
        </Panelset>
    </Panelset>,
    document.getElementById('root')
);