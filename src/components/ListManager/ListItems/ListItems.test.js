import React from 'react';
import {shallow} from 'enzyme';

import ListItems from './ListItems';

describe('<ListItems />', () => {

    it('Renders without crashing', () => {
        shallow(<ListItems />);
    });

});
