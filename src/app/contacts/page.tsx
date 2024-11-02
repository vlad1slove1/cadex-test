'use client';

import React, { useState } from 'react';
import MessageFormImage from '@/components/ui/pages/contacts/MessageFormImage';
import SubmissionMessage from '@/components/ui/pages/contacts/SubmitionMessage';
import styled from 'styled-components';
import FullHeightSection from '@/components/styled/FullHeightSection';
import siteConfig from '@/config/siteConfig';
import { ContentKey } from '@/lib/enums';
import MessageForm from '@/components/ui/pages/contacts/MessageForm';
import useDeviceWidth from '@/hooks/useDeviceWidth';
import { MOBILE_WIDTH_BREAKPOINT } from '@/lib/constants';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    gap: 1rem;
    max-width: 1200px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0;
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.blue[300]};

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 0.2rem;
    }
`;

const Page: React.FC = () => {
    const isMobile = useDeviceWidth(MOBILE_WIDTH_BREAKPOINT);
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <FullHeightSection $bgcolor="50">
            <GridWrapper>
                {!isMobile && (
                    <MessageFormImage
                        src={siteConfig.content.get(ContentKey.SEND_MESSAGE_IMAGE_SRC)!}
                        alt={siteConfig.content.get(ContentKey.SEND_MESSAGE_IMAGE_ALT)!}
                    />
                )}
                {isSubmitted ? (
                    <SubmissionMessage onReturn={() => setIsSubmitted(false)} />
                ) : (
                    <MessageForm onSuccess={() => setIsSubmitted(true)} />
                )}
            </GridWrapper>
        </FullHeightSection>
    );
};

export default Page;
