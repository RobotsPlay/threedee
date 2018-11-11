import React     from 'react';
import ReactDOM  from 'react-dom';

import Panelset from './components/Panelset/Panelset.js';
import Viewport from './components/Viewport/Viewport.js';

import './sass/main.scss';

ReactDOM.render(
    <Panelset>
        <Viewport />
        <div>Hi there</div>
    </Panelset>,
    document.getElementById('root')
);