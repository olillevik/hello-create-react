import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldList from "./HelloWorldList";

describe(App, () => {

    const component = shallow(
        <App/>
    );

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and matches our snapshot', () => {
        const component1 = renderer.create(
            <App/>
        );
        const tree = component1.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has one HelloWorldList', () => {
        expect(component.find(HelloWorldList)).toHaveLength(1);
    });
});
