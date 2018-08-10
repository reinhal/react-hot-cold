import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('should render without crashing', () => {
        shallow(<GuessForm />);
    });
});

it('should fire onMakeGuess callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 50;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
});

it('should also reset input when form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 50;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
});