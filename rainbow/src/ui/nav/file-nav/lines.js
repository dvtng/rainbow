import React from 'react';
import styled from 'styled-components';
import { circleSize, itemHeight, indent } from './sizes';

const Line = styled.div`
    background-color: #999;
    position: absolute;
`;

const VerticalLineLength = Line.extend`
    height: ${props => props.length}px;
    left: ${-indent + circleSize / 2}px;
    top: ${props => itemHeight / 2 - props.length}px;
    width: 1px;
`;

export const VerticalLine = ({ segments }) =>
    <VerticalLineLength length={segments * itemHeight - circleSize / 2} />;

export const HorizontalLine = Line.extend`
    height: 1px;
    left: ${-indent + circleSize / 2}px;
    top: ${itemHeight / 2}px;
    width: ${indent - circleSize / 2}px;
`;
