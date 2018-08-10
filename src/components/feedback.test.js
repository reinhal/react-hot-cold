import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Feedback from "./feedback";

describe ('<Feedback />', () => {
    it('renders without crashing', () => {
        shallow(<Feedback />);
    });
});

it('renders feedback', () => {
    let test_feedback = "testing feedback";
    let wrapper = shallow(<Feedback feedback={test_feedback}/>);
    expect(wrapper.contains(test_feedback)).toEqual(true);
});