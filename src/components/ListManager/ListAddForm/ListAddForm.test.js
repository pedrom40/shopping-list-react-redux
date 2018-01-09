import React from 'react';
import {shallow} from 'enzyme';

import ListAddForm from './ListAddForm';

describe('<ListAddForm />', () => {

    it('Renders without crashing', () => {
        shallow(<ListAddForm />);
    });

});
