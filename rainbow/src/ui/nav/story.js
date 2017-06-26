import React from 'react';
import { Provider } from 'mobx-react';
import Typography from '../typography';
import Nav from './nav';
import NavModel from '../nav-model';

const createNav = () =>
    new NavModel({
        storyFiles: [
            'components/dir1/dir2/foo.story.js',
            'components/dir1/dir2/foo2.story.js',
            'components/bar.story.js'
        ]
    });

export default (
    <Provider nav={createNav()}>
        <Typography>
            <Nav />
        </Typography>
    </Provider>
);

export const withSelectedFileAndStories = () => {
    const nav = createNav();
    nav.selectFile('components/bar.story.js');
    nav.setStories(['default', 'with some variation']);
    return (
        <Provider nav={nav}>
            <Typography>
                <Nav />
            </Typography>
        </Provider>
    );
};
