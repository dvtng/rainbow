import React from 'react';
import { ExplorerItem } from './explorer-item';
import NavStyle from '../nav-style';
import Typography from '../../typography';

const Decorator = ({ children }) =>
    <Typography>
        <NavStyle>
            {children}
        </NavStyle>
    </Typography>;

export default (
    <Decorator>
        <ExplorerItem storyFile="src/TodoItem.story.js" onSelect={() => {}}>
            TodoItem.story.js
        </ExplorerItem>
    </Decorator>
);

export const selectedItem = (
    <Decorator>
        <ExplorerItem
            storyFile="src/TodoItem.story.js"
            onSelect={() => {}}
            isSelected
        >
            TodoItem.story.js
        </ExplorerItem>
    </Decorator>
);
