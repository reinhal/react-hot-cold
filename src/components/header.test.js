import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Header from './header';

describe('<Header />', () => {
    it('should render without crashing', () => {
        shallow(<Header />);
    });
});