'use client';

import { Link } from '@nextui-org/link';
import styled from 'styled-components';
import { FONT_WEIGHTS } from '@/lib/constants';

type Props = { $isColored?: boolean; $weight?: (typeof FONT_WEIGHTS)[number] };

const StyledLink = styled(Link)<Props>`
    color: ${({ $isColored, theme }) => ($isColored ? theme.colors.secondary : theme.colors.white)};
    text-decoration: none;
    font-weight: ${({ $weight = '400' }) => $weight};

    &:hover {
        text-decoration: underline;
        text-underline-offset: 0.5rem;
        text-decoration-color: ${({ $isColored, theme }) =>
            $isColored ? theme.colors.secondary : theme.colors.white};
    }
`;

export default StyledLink;
