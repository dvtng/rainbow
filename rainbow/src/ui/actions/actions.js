import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

const bubble = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 1;
    }

    100% {
        transform: translateY(-500%);
        opacity: 0;
    }
`;

const ActionStyle = styled.div`
    position: absolute;
    bottom: 16px;
    text-align: center;
    animation: ${bubble} 6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 8px;
    border-radius: 16px;
    background-color: #356fcc;
    display: inline-block;
    font-size: 14px;
    opacity: 0;
    right: 16px;
`;

const Action = ({ action, index }) =>
    <ActionStyle index={index}>
        {action}
    </ActionStyle>;

const Actions = ({ actions }) =>
    <Container>
        Actions
        <div>
            {actions
                .slice(0, 5)
                .map((action, i) =>
                    <Action key={action} action={action} index={i} />
                )}
        </div>
    </Container>;

export default Actions;
