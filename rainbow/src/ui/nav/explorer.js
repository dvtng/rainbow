import React from 'react';
import styled from 'styled-components';
import Dir from './dir.js';

const Container = styled.div`
    color: #fff;
    padding: 16px;
`;

const Explorer = ({ root }) =>
    <Container>
        <Dir name={root.name}>{root.children}</Dir>
    </Container>;

export default Explorer;
