'use client';

import siteConfig from '@/config/siteConfig';
import { COLORS_RANGE, DEFAULT_LOGO_HEIGHT, DEFAULT_LOGO_WIDTH } from '@/lib/constants';
import { ContentKey, Path } from '@/lib/enums';
import { Link } from '@nextui-org/link';
import { Image } from '@nextui-org/react';
import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: number;
    height?: number;
    $bgcolor?: (typeof COLORS_RANGE)[number];
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
};

const StyledLogo = styled(Image)<Props>`
    background-color: ${({ theme, $bgcolor }) =>
        $bgcolor ? theme.colors.blue[$bgcolor] : 'transparent'};
    width: ${({ width }) => (width ? `${width}px` : DEFAULT_LOGO_WIDTH)};
    height: ${({ height }) => (height ? `${height}px` : DEFAULT_LOGO_HEIGHT)};

    @media (max-width: 640px) {
        width: 120px;
        height: 30px;
    }
`;

const Logo: React.FC<Props> = ({ $bgcolor, width, height, radius = 'none' }) => (
    <Link href={Path.HOME} className="bg-transparent">
        <StyledLogo
            src={siteConfig.content.get(ContentKey.LOGO_IMAGE_SRC)}
            alt={siteConfig.content.get(ContentKey.LOGO_IMAGE_ALT)}
            radius={radius}
            removeWrapper
            $bgcolor={$bgcolor}
            width={width}
            height={height}
        />
    </Link>
);

export default Logo;
