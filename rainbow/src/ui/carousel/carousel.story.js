import React, { Component } from 'react';
import Carousel from './carousel';

class Alternator extends Component {
    state = {
        active: 0
    };

    constructor(props) {
        super(props);

        this.timeout = setInterval(() => {
            this.setState({
                active: this.state.active === 1 ? 0 : 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <Carousel active={this.state.active}>
                {this.props.children}
            </Carousel>
        );
    }
}

export default (
    <Alternator>
        <div style={{ backgroundColor: '#eee', height: 500 }} />
        <div style={{ backgroundColor: '#ddd', height: 500 }} />
    </Alternator>
);
