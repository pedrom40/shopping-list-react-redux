import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import ListManager from './components/ListManager';
import { listManagerSettings } from './components/ListManager/settings';

ReactDOM.render(
    <Provider store={store}>
        <ListManager cssStyles={listManagerSettings.styles} listDefinitions={listManagerSettings.listDefinitions} />
    </Provider>,
    document.getElementById('root')
);
