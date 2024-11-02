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
            <meta property="og:title" content={openGraph?.title} />
            <meta property="og:description" content={openGraph?.description} />
            <meta property="og:url" content={openGraph?.url} />
            <meta property="og:site_name" content={openGraph?.siteName} />
            <meta property="og:image" content={openGraph?.images[0].url} />
            <meta property="og:image:secure_url" content={openGraph?.images[0].secureUrl} />
            <meta property="og:image:width" content={openGraph?.images[0].width} />
            <meta property="og:image:height" content={openGraph?.images[0].height} />
            <meta property="og:image:alt" content={openGraph?.images[0].alt} />
            <meta property="og:type" content={openGraph?.type} />
        </Head>
    );
};

export default Seo;
