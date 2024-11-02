export type SocialMediaTag = {
    title: string;
    description: string;
    url: string;
    image: string;
};

export type Twitter = SocialMediaTag & {
    domain: string;
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
};

export type OpenGraph = SocialMediaTag & {
    type: 'website' | 'article' | 'profile' | 'video.other' | string;
};
