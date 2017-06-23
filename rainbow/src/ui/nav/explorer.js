import React from 'react';
import styled from 'styled-components';
import Dir from './dir';

const Container = styled.div`
    color: #fff;
    padding: 16px 0;
`;

const Explorer = ({ root }) =>
    <Container>
        {root ? <Dir name={root.name} path="">{root.children}</Dir> : null}
    </Container>;

export default Explorer;
