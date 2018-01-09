import React from 'react';
import {shallow} from 'enzyme';

import ListManager from './ListManager';
import {listManagerSettings} from './settings';

describe('<ListManager />', () => {

    it('Renders without crashing', () => {
        shallow(<ListManager cssStyles={listManagerSettings.styles} listDefinitions={listManagerSettings.listDefinitions} />);
    });

});
