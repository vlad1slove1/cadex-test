'use client';

import styled from 'styled-components';
import { COLORS_RANGE } from '@/lib/constants';

type Props = {
    $bgcolor?: (typeof COLORS_RANGE)[number];
};

const FullHeightSection = styled.section<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme, $bgcolor }) =>
        $bgcolor ? theme.colors.blue[$bgcolor] : theme.colors.white};
    padding: 2rem 1rem;

    @media (min-width: 1024px) {
        padding-top: 7rem;
        min-height: 100vh; /* Keep this only for larger screens */
    }
`;

export default FullHeightSection;
