import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Dir from './dir';

const Container = styled.div`
    padding: 16px 0;
`;

const Explorer = ({ fileTree }) =>
    <Container>
        {fileTree
            ? <Dir name={fileTree.name} path="">{fileTree.children}</Dir>
            : null}
    </Container>;

export default inject(stores => ({
    fileTree: stores.nav.fileTree
}))(observer(Explorer));
