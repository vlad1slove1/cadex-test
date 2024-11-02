import React from 'react';
import Head from 'next/head';
import { OpenGraph, Twitter } from '@/types/socialMediaTag';
import siteConfig from '@/config/siteConfig';

type SeoProps = {
    title?: string;
    description?: string;
    favicon?: string;
    openGraph?: OpenGraph;
    twitter?: Twitter;
};

const Seo: React.FC<SeoProps> = ({ title, description, favicon }) => {
    const pageTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.name;
    const pageDescription = description || siteConfig.description;

    const openGraph = {
        ...siteConfig.openGraph,
        title: siteConfig.openGraph?.title || pageTitle,
        description: siteConfig.openGraph?.description || pageDescription,
    };

    const twitter = {
        ...siteConfig.twitter,
        title: siteConfig.twitter?.title || pageTitle,
        description: siteConfig.twitter?.description || pageDescription,
    };

    return (
        <Head>
            <link rel="icon" href={favicon} />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Open Graph tags */}
            <meta property="og:title" content={openGraph.title} />
            <meta property="og:description" content={openGraph.description} />
            <meta property="og:url" content={openGraph.url} />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="og:type" content={openGraph.type} />
            <meta property="og:image" content={openGraph.image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content={twitter.card} />
            <meta name="twitter:title" content={twitter.title} />
            <meta name="twitter:description" content={twitter.description} />
            <meta name="twitter:url" content={twitter.url} />
            <meta name="twitter:image" content={twitter.image} />
            <meta name="twitter:site" content={`@${twitter.domain}`} />
        </Head>
    );
};

export default Seo;
