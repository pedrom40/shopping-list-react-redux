import React from 'react';
import {shallow} from 'enzyme';

import ListTitle from './ListTitle';
import {listManagerSettings} from '../settings';

describe('<ListTitle />', () => {

    it('Renders without crashing', () => {
        shallow(<ListTitle listName={listManagerSettings.listDefinitions.listName} />);
    });

});
