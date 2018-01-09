import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ListManager from './components/ListManager';
import {listManagerSettings} from './components/ListManager/settings';

ReactDOM.render(
    <ListManager cssStyles={listManagerSettings.styles} listDefinitions={listManagerSettings.listDefinitions} />,
    document.getElementById('root')
);
