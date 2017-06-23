import React, { Component } from 'react';
import Nav from './nav';

class NavContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        fetch('/story-list').then(resp => resp.json()).then(data => {
            this.setState({
                root: data
            });
        });
    }

    render() {
        return <Nav root={this.state.root} />;
    }
}

export default NavContainer;
