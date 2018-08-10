import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('should render without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    });

    it('renders a list of guesses', () => {
        const values = [50, 34, 28, 12];
        const wrapper = shallow(<GuessList guesses={values}/>);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((values, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});