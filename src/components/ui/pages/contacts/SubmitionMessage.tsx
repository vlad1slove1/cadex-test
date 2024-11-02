'use client';

import React from 'react';
import { ArrowRight } from '@/components/Icons';
import { Button } from '@nextui-org/button';
import styled from 'styled-components';

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    @media (max-width: 1024px) {
        padding: 2rem 0;
        height: 100vh;
    }
`;

const SubmissionMessage: React.FC<{ onReturn: () => void }> = ({ onReturn }) => (
    <MessageContainer>
        <div className="text-lg font-semibold">Message generated on the server</div>
        <Button
            onClick={onReturn}
            variant="flat"
            color="primary"
            endContent={<ArrowRight color="#004493ff" />}
        >
            Return to Form
        </Button>
    </MessageContainer>
);

export default SubmissionMessage;
