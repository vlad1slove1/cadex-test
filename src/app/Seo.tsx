import React from 'react';
import Head from 'next/head';
import { OpenGraph } from '@/types/openGraph';
import siteConfig from '@/config/siteConfig';

type SeoProps = {
    title?: string;
    description?: string;
    favicon?: string;
    openGraph?: OpenGraph;
};

const Seo: React.FC<SeoProps> = ({ title, description, openGraph, favicon }) => {
    const pageTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.name;
    const pageDescription = description || siteConfig.description;

    return (
        <Head>
            <link rel="icon" href={favicon} />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={openGraph?.title || pageTitle} />
            <meta property="og:description" content={openGraph?.description || pageDescription} />
            <meta property="og:url" content={openGraph?.url} />
            <meta property="og:site_name" content={openGraph?.siteName || siteConfig.name} />
            <meta property="og:type" content={openGraph?.type || 'website'} />
            {openGraph?.images.map((image, index) => (
                <meta key={index} property="og:image" content={image.url} />
            ))}
        </Head>
    );
};

export default Seo;
