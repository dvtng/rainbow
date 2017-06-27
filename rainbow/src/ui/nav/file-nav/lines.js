import React from 'react';
import styled from 'styled-components';
import { circleSize, itemHeight, indent } from './sizes';

const Line = styled.div`
    background-color: ${props => (props.isActive ? '#fff' : '#4f4f4f')};
    position: absolute;
    z-index: ${props => (props.isActive ? 1 : 0)};
    transition: 0.4s all;
`;

const BranchContainer = styled.div`
    bottom: ${itemHeight / 2}px;
    height: 100%;
    position: absolute;
    left: ${-indent + circleSize / 2}px;
    width: 0;
`;

const HLine = Line.extend`
    height: 1px;
    top: ${itemHeight}px;
    width: ${indent - circleSize / 2}px;
`;

const VLine = Line.extend`
    height: ${props => itemHeight - (props.isFirst ? circleSize / 2 : 0)}px;
    top: ${props => (props.isFirst ? circleSize / 2 : 0)}px;
    width: 1px;
`;

export const Branch = ({ isActive, shouldJoin, isFirst }) =>
    <BranchContainer>
        <HLine isActive={isActive} />
        <VLine isActive={isActive || shouldJoin} isFirst={isFirst} />
    </BranchContainer>;

export const SiblingJoiner = VLine.extend`
    height: calc(100% - ${itemHeight}px);
    transform: translate(${-indent + circleSize / 2}px, ${itemHeight / 2}px);
`;
