import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('should render without crashing', () => {
        shallow(<TopNav />);
    });
});

it('should call onNewGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
});