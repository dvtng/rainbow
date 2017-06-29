import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Dir from './dir';
import ExplorerFilter from './explorer-filter';

const Container = styled.div`
    padding: 16px 24px;
`;

const Explorer = ({ fileTree }) => (
    <Container>
        <ExplorerFilter />
        {fileTree
            ? <Dir name={fileTree.name} path="">{fileTree.children}</Dir>
            : null}
    </Container>
);

export default inject(stores => ({
    fileTree: stores.nav.tree
}))(observer(Explorer));
