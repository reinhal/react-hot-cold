import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import StatusSection from './status-section';

describe('<StatusSection />', () => {
    it('should render without crashing', () => {
        shallow(<StatusSection auralStatus="" guesses={[]}/>);
    });
});