import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: -16px;
    outline: none;
    padding: 4px 16px;

    & svg {
        fill: #505050;
        transition: 0.2s all;
    }

    &:hover svg {
        fill: #aaa;
    }
`;

const ArrowLeft = () =>
    <svg width="10" height="22" viewBox="4.5 0 15 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>;

export default ({ onClick }) =>
    <Container onClick={onClick}>
        <ArrowLeft />
    </Container>;
