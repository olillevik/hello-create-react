import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import HelloWorld from './HelloWorld'
import AddGreeter from './AddGreeter'

describe(HelloWorldList, () => {
    const component = shallow(
        <HelloWorldList/>
    );

    it('renders and matches snapshot', () => {
        const component1 = renderer.create(
            <HelloWorldList/>
        )
        const tree = component1.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('contains AddGreeter component', () => {
        expect(component.find(AddGreeter)).toHaveLength(1);
    });

    it('contains the same number if HelloWorld components as greetings', () => {
        expect(component.find(HelloWorld)).toHaveLength(component.state('greetings').length);
    });

    it('adds a greeting when the add greeting function is called', () => {
        const prevLength = component.find(HelloWorld).length;
        component.instance().addGreetingToList('Sample');
        component.update();
        const newLength = component.find(HelloWorld).length;
        expect(prevLength).toEqual(newLength - 1);
    });

    it('removes a greeeting when the remove greeting function is called', () => {
        const prevLength = component.find(HelloWorld).length;
        component.instance().removeGreetingFromList(component.state('greetings')[0]);
        component.update();
        const newLength = component.find(HelloWorld).length;
        expect(prevLength).toEqual(newLength + 1);
    });
});