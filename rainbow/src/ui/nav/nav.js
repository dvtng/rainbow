import React from 'react';
import styled from 'styled-components';
import Explorer from './file-nav/explorer';
import StoryNav from './story-nav/story-nav';
import NavStyle from './nav-style';

const Container = NavStyle.extend`
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

const Nav = () =>
    <Container>
        <H1>Rainbow</H1>
        <Explorer />
        <StoryNav />
    </Container>;

export default Nav;
