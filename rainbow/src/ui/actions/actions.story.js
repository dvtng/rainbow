import React, { Component } from 'react';
import Typography from '../typography';
import NavStyle from '../nav/nav-style';
import Actions from './actions';

class ActionProducer extends Component {
    counter = 0;

    state = {
        actions: []
    };

    onClick = () => {
        this.setState({
            actions: ['Hello ' + this.counter++].concat(this.state.actions)
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Click me</button>
                <Actions actions={this.state.actions} />
            </div>
        );
    }
}

export default (
    <Typography>
        <NavStyle>
            <div style={{ height: 200 }}>
                <ActionProducer />
            </div>
        </NavStyle>
    </Typography>
);
