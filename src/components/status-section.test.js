import React from 'react';
import {shallow, mount} from 'enzyme';
 



import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('should render without crashing', () => {
        shallow(<StatusSection auralStatus="" guesses={[]}/>);
    });
});