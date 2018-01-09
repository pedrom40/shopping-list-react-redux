import React from 'react';
import {shallow} from 'enzyme';

import ListAddForm from './ListAddForm';
import {listManagerSettings} from '../settings';

describe('<ListAddForm />', () => {

    it('Renders without crashing', () => {
        shallow(<ListAddForm itemDefinitions={listManagerSettings.listDefinitions} formStyles={listManagerSettings.styles.addForm} />);
    });

});
