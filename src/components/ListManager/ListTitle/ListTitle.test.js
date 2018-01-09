import React from 'react';
import {shallow} from 'enzyme';

import ListTitle from './ListTitle';

describe('<ListTitle />', () => {

    it('Renders without crashing', () => {
        shallow(<ListTitle />);
    });

});
