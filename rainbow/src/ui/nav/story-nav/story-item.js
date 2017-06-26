import styled from 'styled-components';

const selectedColor = '#606060';

const StoryItem = styled.a`
    background-color: ${props =>
        props.isSelected ? selectedColor : 'transparent'};
    border-left: 4px solid;
    border-color: ${props => (props.isSelected ? '#C4C4C4' : 'transparent')};
    cursor: pointer;
    display: block;
    padding: 10px 24px 10px 22px;
    transition: 0.2s all;

    &:hover {
        background-color: ${props =>
            props.isSelected ? selectedColor : '#404040'};
    }
`;

export default StoryItem;
