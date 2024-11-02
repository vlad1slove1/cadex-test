import React from 'react';
import StyledLink from '@/components/styled/StyledLink';

import type { NavItem } from '@/styles/navItem';

type Props = NavItem & {
    $colored?: boolean;
};

const NavItem: React.FC<Props> = ({ label, href, $colored }) => (
    <StyledLink href={href} $isColored={$colored}>
        {label}
    </StyledLink>
);

export default NavItem;
