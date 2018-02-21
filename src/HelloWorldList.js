import React, {Component} from 'react';
import './HelloWorldList.css';

import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {

    constructor(props) {
        super(props);
        this.state = {greetings: ['Jim', 'Sally', 'Bender']};
        this.addGreetingToList = this.addGreetingToList.bind(this);
        this.removeGreetingFromList = this.removeGreetingFromList.bind(this);
    }

    render() {
        return (
            <div className='HelloWorldList'>
                <AddGreeter addGreeting={this.addGreetingToList}/>
                {this.renderGreetings()}

            </div>
        );
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name} removeGreeting={this.removeGreetingFromList}/>
        ));
    }

    addGreetingToList(newName) {
        this.setState({greetings: [...this.state.greetings, newName]});
    }

    removeGreetingFromList(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
                return name != removeName;
            }
        );
        this.setState({greetings: filteredGreetings});
    }
}

export default HelloWorldList;