import React from 'react';
import Dir from './dir.js';
import Explorer from './explorer.js';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #202020;
    width: 338px;
`;

// Mock data
const root = {
    name: 'root',
    children: [
        {
            name: 'src/components',
            children: [
                {
                    name: 'todo',
                    children: [
                        {
                            name: 'TodoList'
                        },
                        {
                            name: 'TodoItem'
                        },
                        {
                            name: 'TodoCheckbox'
                        }
                    ]
                },
                {
                    name: 'App'
                }
            ]
        }
    ]
};

const Nav = () => <Container><Explorer root={root} /></Container>;

export default Nav;
