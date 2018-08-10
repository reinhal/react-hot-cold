import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('should render without crashing', () => {
        shallow(<GuessCount />);
    });
});

it('renders the guess count', () => {
    const value = 10;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
});