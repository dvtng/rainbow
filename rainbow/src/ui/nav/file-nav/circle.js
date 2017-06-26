import styled from 'styled-components';
import { circleSize } from './sizes';

const Circle = styled.div`
    background: ${props => (props.isFilled ? '#275FA6' : 'transparent')};
    border: 1px solid;
    border-color: ${props => (props.isSelected ? '#fff' : '#999')};
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: ${circleSize}px;
    margin-right: 8px;
    width: ${circleSize}px;
    vertical-align: bottom;
`;

export default Circle;
