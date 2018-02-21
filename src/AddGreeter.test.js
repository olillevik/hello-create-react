import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter';

describe(AddGreeter, () => {
    const mockAddGreeting = jest.fn();
    const component = shallow(
        <AddGreeter addGreeting={mockAddGreeting}/>
    );

    it('renders and matches our snapshot', () => {
        const component1 = renderer.create(
            <AddGreeter/>
        );
        const tree = component1.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });

    it('calls passed in function when add button is clicked', () => {
        component.find('button').simulate('click');
        expect(mockAddGreeting).toBeCalled();
    });

    it('updates the form when keys are pressed', () => {
        const updateKey = 'foo';
        component.instance().handleUpdate({
            target: {
                value: updateKey
            }
        });

        expect(component.state('greetingName')).toEqual(updateKey);
    });

    it('blanks out the form when the button is clicked', () => {
        const updateKey = 'bar';
        component.instance().handleUpdate({
            target: {
                value: updateKey
            }
        });
        component.find('button').simulate('click');
        expect(component.state('greetingName')).toBe('');
    });
});

