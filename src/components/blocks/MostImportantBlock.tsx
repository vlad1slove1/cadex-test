'use client';

import React from 'react';
import styled from 'styled-components';
import StyledTextDiv from '@/components/styled/StyledTextDiv';
import StyledText from '@/components/styled/StyledText';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 32rem;
    gap: 1rem;
    align-self: flex-start;
    margin: 0 1rem;

    @media (min-width: 768px) {
        max-width: 50%;
    }
`;

const MostImportantBlock: React.FC = () => {
    return (
        <Container>
            <StyledTextDiv>
                <StyledText as="span" $color="600" $weight="900">
                    Most important
                </StyledText>
                &nbsp;title
                <br />
                on the page
            </StyledTextDiv>
            <StyledText as="p" $color="900" $weight="600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
                condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt
                ante
            </StyledText>
        </Container>
    );
};

export default MostImportantBlock;
