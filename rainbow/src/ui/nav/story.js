import React from 'react';
import { Provider } from 'mobx-react';
import Typography from '../typography';
import Nav from './nav';
import NavModel from '../nav-model';

const nav = new NavModel({
    fileTree: {
        name: 'components',
        children: [
            {
                name: 'dir1/dir2',
                children: [{ name: 'foo.story.js' }]
            },
            {
                name: 'bar.story.js'
            }
        ]
    }
});

export default (
    <Provider nav={nav}>
        <Typography>
            <Nav />
        </Typography>
    </Provider>
);
