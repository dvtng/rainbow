import React from 'react';
import { Provider } from 'mobx-react';
import Typography from '../typography';
import Nav from './nav';
import NavModel from '../nav-model';

const nav = new NavModel({
    storyFiles: ['components/dir1/dir2/foo.story.js', 'components/bar.story.js']
});

export default (
    <Provider nav={nav}>
        <Typography>
            <Nav />
        </Typography>
    </Provider>
);
