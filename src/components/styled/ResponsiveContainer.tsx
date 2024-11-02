'use client';

import { COLORS_RANGE } from '@/lib/constants';
import styled from 'styled-components';

type Props = {
    $pt?: string;
    $pb?: string;
    $asColumn?: boolean;
    $bgcolor?: (typeof COLORS_RANGE)[number];
};

const ResponsiveContainer = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-top: ${({ $pt }) => $pt || '1rem'};
    padding-bottom: ${({ $pb }) => $pb || '1rem'};
    background-color: ${({ theme, $bgcolor }) =>
        $bgcolor ? theme.colors.blue[$bgcolor] : theme.colors.white};

    @media (min-width: 768px) {
        flex-direction: ${({ $asColumn }) => ($asColumn ? 'column' : 'row')};
        gap: 2rem;
    }
`;

export default ResponsiveContainer;
