import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Circle from '../file-nav/circle';
import displayFilename from '../display-filename';
import ArrowLeft from './arrow-left';

const pattern = /(.*)\/(.*)/;
const split = file => pattern.exec(file);

const Container = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 8px;
    padding: 0 24px;
`;

const Path = styled.div`
    color: #808080;
    margin-bottom: 4px;
`;

export const FileInfo = ({ file, goBack }) => {
    if (!file) return null;

    const parts = split(file);
    return (
        <Container>
            <ArrowLeft onClick={goBack} />
            <div>
                <Path>
                    {parts ? parts[1] : ''}
                </Path>
                <div>
                    <Circle isFilled isSelected />
                    {displayFilename(parts ? parts[2] : file)}
                </div>
            </div>
        </Container>
    );
};

export default inject(stores => ({
    file: stores.nav.selectedFile,
    goBack: stores.nav.goBack
}))(observer(FileInfo));
