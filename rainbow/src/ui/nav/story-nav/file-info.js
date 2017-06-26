import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const pattern = /(.*)\/(.*)/;
const split = file => pattern.exec(file);

const Container = styled.div`
    padding: 0 24px;
`;

const Path = styled.div`
    color: #808080;
    margin-bottom: 8px;
`;

const File = styled.div`
    margin-bottom: 8px;
`;

export const FileInfo = ({ file }) => {
    if (!file) return null;

    const parts = split(file);
    return (
        <Container>
            <Path>{parts ? parts[1] : ''}</Path>
            <File>{parts ? parts[2] : file}</File>
        </Container>
    );
};

export default inject(stores => ({
    file: stores.nav.selectedFile
}))(observer(FileInfo));
