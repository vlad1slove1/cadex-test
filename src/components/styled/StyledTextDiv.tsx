'use client';

import styled from 'styled-components';

const StyledTextDiv = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.blue['950']};

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export default StyledTextDiv;
