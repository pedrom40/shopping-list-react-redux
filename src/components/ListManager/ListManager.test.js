import React from 'react';
import {shallow} from 'enzyme';

import ListManager from './ListManager';

describe('<ListManager />', () => {

    it('Renders without crashing', () => {
        shallow(<ListManager />);
    });

});
