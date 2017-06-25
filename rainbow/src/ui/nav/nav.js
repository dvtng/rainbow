import React from 'react';
import styled from 'styled-components';
import Explorer from './file-nav/explorer';
import StoryNav from './story-nav/story-nav';

const Container = styled.div`
    background-color: #202020;
    box-sizing: border-box;
    color: #fff;
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

const Nav = () =>
    <Container>
        <H1>Rainbow</H1>
        <Explorer />
        <StoryNav />
    </Container>;

export default Nav;
