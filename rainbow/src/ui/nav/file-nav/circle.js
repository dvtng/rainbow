import styled from 'styled-components';
import * as colors from '../../colors';
import { circleSize } from './sizes';

const Circle = styled.div`
    background: ${props =>
        props.isFilled ? colors.brightBlue : 'transparent'};
    border: 1px solid;
    border-color: ${props => (props.isSelected ? '#fff' : '#4f4f4f')};
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: ${circleSize}px;
    margin-right: 8px;
    width: ${circleSize}px;
    vertical-align: bottom;
    transition: 0.4s all;
`;

export default Circle;
