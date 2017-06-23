import React from 'react';
import Dir from './dir.js';
import Explorer from './explorer.js';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #202020;
    min-height: 400px;
    width: 338px;
`;

const Nav = ({ root }) => <Container><Explorer root={root} /></Container>;

export default Nav;
