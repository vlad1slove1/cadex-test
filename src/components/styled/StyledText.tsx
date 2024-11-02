'use client';

import React from 'react';
import styled from 'styled-components';
import { COLORS_RANGE, FONT_WEIGHTS } from '@/lib/constants';

type Props = {
    $color?: (typeof COLORS_RANGE)[number];
    $weight?: (typeof FONT_WEIGHTS)[number];
    as?: keyof React.JSX.IntrinsicElements;
    $pt?: string;
    $pb?: string;
};

const StyledText = styled.span<Props>`
    color: ${({ theme, $color }) => ($color ? theme.colors.blue[$color] : theme.colors.white)};
    font-weight: ${({ $weight = '400' }) => $weight};
    padding-top: ${({ $pt }) => $pt || '1rem'};
    padding-bottom: ${({ $pb }) => $pb || '1rem'};
`;

export default StyledText;
