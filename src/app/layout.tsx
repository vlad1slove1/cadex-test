import Providers from '@/app/providers';
import Seo from '@/app/Seo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import siteConfig from '@/config/siteConfig';
import React, { ReactNode } from 'react';
import { fontSans } from '@/config/fonts';
import clsx from 'clsx';
import './globals.css';
import MainContainer from '@/components/MainContainer';

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={clsx('bg-background font-sans antialiased', fontSans.variable)}>
                <Providers>
                    <Seo
                        title={siteConfig.name}
                        description={siteConfig.description}
                        openGraph={siteConfig.openGraph}
                        favicon="/favicon.ico"
                    />
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <MainContainer children={children} />
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
