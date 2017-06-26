import styled from 'styled-components';

const StoryItem = styled.a`
    background-color: ${props =>
        props.isSelected ? '#606060' : 'transparent'};
    border-left: 4px solid;
    border-color: ${props => (props.isSelected ? '#C4C4C4' : 'transparent')};
    cursor: pointer;
    display: block;
    padding: 10px 16px;

    &:hover {
        background-color: #505050;
    }
`;

export default StoryItem;
