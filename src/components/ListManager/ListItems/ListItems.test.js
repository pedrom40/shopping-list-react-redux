import React from 'react';
import {shallow} from 'enzyme';

import ListItems from './ListItems';
import {listManagerSettings} from '../settings';

describe('<ListItems />', () => {

    it('Renders without crashing', () => {
        shallow(<ListItems listStyles={listManagerSettings.styles.ulList} controlLabels={listManagerSettings.listDefinitions.controls} />);
    });

});
