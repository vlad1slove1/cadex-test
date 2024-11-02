import React from 'react';
import StyledLink from '@/components/styled/StyledLink';

import type { ContactItem } from '@/types/contactItem';

type Props = ContactItem & {
    $colored?: boolean;
};

const ContactItem: React.FC<Props> = ({ label, href, icon, $colored }) => (
    <>
        {icon}
        <StyledLink href={href} $isColored={$colored}>
            {label}
        </StyledLink>
    </>
);

export default ContactItem;
