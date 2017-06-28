import React from 'react';
import FileInfo from './file-info';
import StoryList from './story-list';
import { inject, observer } from 'mobx-react';

const StoryNav = ({ isFileSelected }) =>
    <div>
        <FileInfo />
        {isFileSelected && <StoryList />}
    </div>;

export default inject(stores => ({
    isFileSelected: !!stores.nav.selectedFile
}))(observer(StoryNav));
