import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import ExplorerItem from './explorer-item';
import { indent } from './sizes';
import { Branch, SiblingJoiner } from './lines';

const Ul = styled.ul`
    margin: 0;
    padding-left: ${props => props.indent}px;
`;

const Li = styled.li`
    list-style: none;
    position: relative;
`;

const isDir = file => file.children && file.children.length;

const isFileInPath = (path, file) => file && file.startsWith(path);

const joinPath = (parentPath, node) =>
    parentPath + node.name + (isDir(node) ? '/' : '');

const isLaterSiblingActive = (parentPath, activeFile, laterSiblings) =>
    isFileInPath(parentPath, activeFile) &&
    laterSiblings.some(sibling =>
        isFileInPath(joinPath(parentPath, sibling), activeFile)
    );

const Dir = ({ path, selectedFile, children }) => (
    <Ul indent={path ? indent : 0}>
        {children.map((child, i) => {
            const childPath = joinPath(path, child);
            const isLast = i === children.length - 1;
            const shouldJoin = isLaterSiblingActive(
                path,
                selectedFile,
                children.slice(i + 1)
            );

            return (
                <Li key={child.name}>
                    {path &&
                        <Branch
                          isFirst={i === 0}
                          isActive={isFileInPath(childPath, selectedFile)}
                          shouldJoin={shouldJoin}
                        />}
                    {path && !isLast && <SiblingJoiner isActive={shouldJoin} />}
                    <ExplorerItem
                      isActive={isFileInPath(childPath, selectedFile)}
                      storyFile={!isDir(child) && childPath}
                    >
                        {child.name}
                    </ExplorerItem>
                    {isDir(child) &&
                        <Dir
                          name={child.name}
                          path={childPath}
                          selectedFile={selectedFile}
                        >
                            {child.children}
                        </Dir>}
                </Li>
            );
        })}
    </Ul>
);

export default inject(stores => ({
    selectedFile: stores.nav.selectedFile
}))(observer(Dir));
