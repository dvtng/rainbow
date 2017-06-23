import React from 'react';
import Typography from '../typography';
import Nav from './nav';

export default (
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
);

export const withHeading = <Nav>Rainbow</Nav>;
