import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2139e1',
                secondary: '#ffb957ff',
                success: '#21e16b',
                danger: '#e12137',
                warning: '#e1cb21',
                blue: {
                    '50': '#ebf5ff',
                    '100': '#dbebff',
                    '200': '#bedaff',
                    '300': '#97c0ff',
                    '400': '#6e9aff',
                    '500': '#4d75ff',
                    '600': '#2d4bfe',
                    '700': '#2139e1',
                    '800': '#1e33b5',
                    '900': '#21338e',
                    '950': '#131c53',
                },
            },
        },
    },
    safelist: [
        'bg-blue-50',
        'bg-blue-100',
        'bg-blue-200',
        'bg-blue-300',
        'bg-blue-400',
        'bg-blue-500',
        'bg-blue-600',
        'bg-blue-700',
        'bg-blue-800',
        'bg-blue-900',
        'bg-blue-950',
    ],
    darkMode: 'class',
    plugins: [nextui()],
};
export default config;
