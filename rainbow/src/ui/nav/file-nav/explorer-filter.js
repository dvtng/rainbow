import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Input = styled.input`
    background-color: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #404040;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    padding: 8px 12px;
    width: 100%;
    margin-bottom: 8px;
    transition: 0.3s all;

    &:focus {
        border-color: #b1cae2;
    }
`;

const ExplorerFilter = ({ onFilterChange, fileFilter }) =>
    <Input
        placeholder="Filter"
        value={fileFilter}
        onChange={e => onFilterChange(e.target.value)}
    />;

export default inject(stores => ({
    onFilterChange: stores.nav.filterFiles,
    fileFilter: stores.nav.fileFilter
}))(ExplorerFilter);
