import React, { SVGProps } from 'react';
import util from '@/lib/util';

export type IconProps = SVGProps<SVGSVGElement> & {
    size?: number;
    color?: string;
};

export const ArrowRight: React.FC<IconProps> = util.createSvgIcon(
    <path d="M5 12h13M12 5l7 7-7 7" />
);

export const Home: React.FC<IconProps> = util.createSvgIcon(
    <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </>
);

export const Mail: React.FC<IconProps> = util.createSvgIcon(
    <>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </>
);

export const Phone: React.FC<IconProps> = util.createSvgIcon(
    <>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </>
);

export const User: React.FC<IconProps> = util.createSvgIcon(
    <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </>
);

export const Email: React.FC<IconProps> = util.createSvgIcon(
    <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </>
);
