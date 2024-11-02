import React from 'react';
import { IconProps } from '@/components/Icons';

export type ContactItem = {
    label: string;
    href?: string;
    icon?: React.FC<IconProps>;
};
