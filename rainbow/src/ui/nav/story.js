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
                            children: [{ name: 'foo' }]
                        },
                        {
                            name: 'bar'
                        }
                    ]
                }}
            />
        </Typography>
    </Provider>
);

export const withHeading = <Nav>Rainbow</Nav>;
