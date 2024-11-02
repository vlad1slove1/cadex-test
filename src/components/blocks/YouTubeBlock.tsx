'use client';

import siteConfig from '@/config/siteConfig';
import { ContentKey } from '@/lib/enums';
import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
    border: 5px outset #dbebff;
    border-radius: 10px;
    width: 100%;
    max-width: 1000px;
    height: auto;
    aspect-ratio: 16 / 9;
    max-height: 600px;

    @media (max-width: 600px) {
        max-width: 90vw;
    }
`;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const YouTubeBlock: React.FC = () => {
    return (
        <VideoContainer>
            <StyledIframe
                src={`https://www.youtube.com/embed/${siteConfig.content.get(ContentKey.YOUTUBE_VIDEO_LINK)}`}
                width={1000}
                height={600}
                title={siteConfig.content.get(ContentKey.YOUTUBE_VIDEO_LABEL)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </VideoContainer>
    );
};

export default YouTubeBlock;
