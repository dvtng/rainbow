import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '../typography';
import NavStyle from '../nav/nav-style';
import Actions from './actions';

const Container = styled.div`
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    background-color: #444;
    border: none;
    color: #ddd;
    cursor: pointer;
    font-size: inherit;
    padding: 16px;
`;

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
            <Container>
                <Button onClick={this.onClick}>Click me</Button>
                <Actions actions={this.state.actions} />
            </Container>
        );
    }
}

export default (
    <Typography>
        <NavStyle>
            <ActionProducer />
        </NavStyle>
    </Typography>
);
