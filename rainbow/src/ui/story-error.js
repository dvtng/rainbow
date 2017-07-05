import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #333;
    color: #fff;
`;

const Title = styled.h2`
    background-color: #bb1f0d;
    margin: 0;
    font-size: 20px;
    padding: 16px 24px;
`;

const Stack = styled.p`
    line-height: 1.5;
    padding: 16px 24px;
    margin: 0;

    & > span {
        display: block;
    }
`;

const StoryError = ({ error }) =>
    <Container>
        <Title>
            {error.name ? `${error.name}: ${error.message}` : error.message}
        </Title>
        {error.stack &&
            <Stack>
                {error.stack.split(/ at |@/).map((line, i) =>
                    <span key={i}>
                        {i > 0 ? `at ${line}` : line}
                    </span>
                )}
            </Stack>}
    </Container>;

export default StoryError;
