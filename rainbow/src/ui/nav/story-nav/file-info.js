import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const pattern = /(.*)\/(.*)/;
const split = file => pattern.exec(file);

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
        <div>
            <Path>{parts[1]}</Path>
            <File>{parts[2]}</File>
        </div>
    );
};

export default inject(stores => ({
    file: stores.nav.selectedFile
}))(observer(FileInfo));
