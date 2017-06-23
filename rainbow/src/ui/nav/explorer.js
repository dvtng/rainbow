import React from 'react';
import styled from 'styled-components';
import Dir from './dir';

const Container = styled.div`
    color: #fff;
    padding: 16px;
`;

const Explorer = ({ root }) =>
    <Container>
        {root ? <Dir name={root.name}>{root.children}</Dir> : null}
    </Container>;

export default Explorer;
