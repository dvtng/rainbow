import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Container = styled.div`
    color: #fff;
`;

const Input = styled.input`
    background-color: transparent;
    color: #fff;
    outline: none;
    border: none;
    font-size: 16px;
`;

const ExplorerFilter = ({ onFilterChange, fileFilter }) =>
    <Container>
        <Input
            placeholder="Filter"
            value={fileFilter}
            onChange={e => onFilterChange(e.target.value)}
        />
    </Container>;

export default inject((stores, props) => ({
    onFilterChange: stores.nav.filterFiles,
    fileFilter: stores.nav.fileFilter
}))(ExplorerFilter);
