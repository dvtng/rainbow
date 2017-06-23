import React from 'react';
import Nav from './nav';

export default (
    <Nav
        root={{
            name: 'components',
            children: [
                {
                    name: 'foo'
                },
                {
                    name: 'bar'
                }
            ]
        }}
    />
);

export const withHeading = <Nav>Rainbow</Nav>;
