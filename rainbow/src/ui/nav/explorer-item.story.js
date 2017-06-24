import React from 'react';
import { ExplorerItem } from './explorer-item';

export default (
    <ExplorerItem storyFile="src/TodoItem.story.js" onSelect={() => {}}>
        TodoItem.story.js
    </ExplorerItem>
);

export const selected = (
    <ExplorerItem
        storyFile="src/TodoItem.story.js"
        onSelect={() => {}}
        isSelected
    >
        TodoItem.story.js
    </ExplorerItem>
);
