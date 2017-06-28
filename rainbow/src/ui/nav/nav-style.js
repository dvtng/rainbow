import React from 'react';
import styled from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';

const NavStyle = styled.div`
    background-color: #202020;
    box-sizing: border-box;
    color: #fff;
    flex-shrink: 0;
    overflow: scroll;
    padding: 24px 0;
    width: 300px;
`;

export default ({ children }) =>
    <NavStyle>
        <SkeletonTheme color="#333" highlightColor="#4a4a4a">
            {children}
        </SkeletonTheme>
    </NavStyle>;
