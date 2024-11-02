export type OpenGraphImage = {
    url: string;
    secureUrl: string;
    width: number;
    height: number;
    alt: string;
};

export type OpenGraph = {
    title: string;
    description: string;
    url: string;
    siteName: string;
    type: 'website' | 'article' | 'profile' | 'video.other' | string;
    images: OpenGraphImage[];
};
