import React from 'react';
import Dir from './dir';
import Explorer from './explorer';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #202020;
    box-sizing: border-box;
    flex-shrink: 0;
    min-height: 400px;
    padding: 32px;
    width: 332px;
`;

const H1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-family: 'Lily Script One', cursive;
    font-weight: normal;
    margin: 0;
`;

const Nav = ({ root }) =>
    <Container>
        <H1>Rainbow</H1>
        <Explorer root={root} />
    </Container>;

export default Nav;
