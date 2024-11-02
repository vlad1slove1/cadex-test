'use client';

import React, { ReactNode, StrictMode } from 'react';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/styles/theme';

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();

    return (
        <StrictMode>
            <NextUIProvider navigate={router.push}>
                <ThemeProvider theme={theme}>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </ThemeProvider>
            </NextUIProvider>
        </StrictMode>
    );
};

export default Providers;
