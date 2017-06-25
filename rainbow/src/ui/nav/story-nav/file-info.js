import React from 'react';
import { inject, observer } from 'mobx-react';

export const FileInfo = ({ file }) =>
    <div>
        <span>{file}</span>
    </div>;

export default inject(stores => ({
    file: stores.nav.selectedFile
}))(observer(FileInfo));
