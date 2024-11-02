'use client';

import React from 'react';
import { Button, ButtonProps } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { COLORS_RANGE, MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import clsx from 'clsx';

type Props = ButtonProps & {
    label: string;
    href: string;
    bgcolor?: (typeof COLORS_RANGE)[number];
};

const ButtonLink: React.FC<Props> = ({ label, href, bgcolor = '500', ...buttonProps }) => {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const colorClass = `bg-blue-${bgcolor}`;

    return (
        <Button
            as={Link}
            href={href}
            size={isMobile ? 'sm' : 'md'}
            className={clsx('text-large text-white', colorClass)}
            {...buttonProps}
        >
            {label}
        </Button>
    );
};

export default ButtonLink;
