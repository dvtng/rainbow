import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 6px 0;
`;

const Circle = styled.div`
    border: 1px solid #fff;
    border-radius: 50%;
    display: inline-block;
    height: 17px;
    margin-right: 8px;
    width: 17px;
    vertical-align: bottom;
`;

export default ({ path, children }) =>
    <Container>
        <Circle />
        <span title={path}>{children}</span>
    </Container>;
