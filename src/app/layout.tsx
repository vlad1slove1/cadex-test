import React, { ReactNode } from 'react';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import siteConfig from '@/config/siteConfig';
import { Metadata } from 'next';
import { fontSans } from '@/config/fonts';
import clsx from 'clsx';
import './globals.css';
import MainContainer from '@/components/MainContainer';

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.baseUrl),
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: siteConfig.openGraph.title,
        description: siteConfig.openGraph.description,
        url: siteConfig.openGraph.url,
        type: siteConfig.openGraph.type,
        images: siteConfig.openGraph.images,
    },
    twitter: {
        card: siteConfig.twitter.card,
        title: siteConfig.twitter.title,
        description: siteConfig.twitter.description,
        images: siteConfig.twitter.images,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={clsx('bg-background font-sans antialiased', fontSans.variable)}>
                <Providers>
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
