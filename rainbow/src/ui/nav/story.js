import React from 'react';
import { Provider } from 'mobx-react';
import Typography from '../typography';
import Nav from './nav';
import NavModel from '../nav-model';

const nav = new NavModel();

export default (
    <Provider nav={nav}>
        <Typography>
            <Nav
                root={{
                    name: 'components',
                    children: [
                        {
                            name: 'dir',
                            children: [{ name: 'foo.story.js' }]
                        },
                        {
                            name: 'bar.story.js'
                        }
                    ]
                }}
            />
        </Typography>
    </Provider>
);

export const withHeading = <Nav>Rainbow</Nav>;
