import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Explorer from './file-nav/explorer';
import StoryNav from './story-nav/story-nav';
import NavStyle from './nav-style';
import Carousel from '../carousel/carousel';

const H1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-family: 'Lily Script One', cursive;
    font-weight: normal;
    margin: 0 0 16px;
    padding: 0 24px;
`;

const Nav = ({ selectedFile, isViewingFiles }) =>
    <NavStyle>
        <H1>Rainbow</H1>
        <Carousel active={isViewingFiles || !selectedFile ? 0 : 1}>
            <Explorer />
            <StoryNav />
        </Carousel>
    </NavStyle>;

export default inject(stores => ({
    selectedFile: stores.nav.selectedFile,
    isViewingFiles: stores.nav.isViewingFiles
}))(observer(Nav));
