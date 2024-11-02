'use client';

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import React from 'react';
import styled from 'styled-components';

type Props = {
    src: string;
    alt: string;
    title: string;
    description: string;
};

const StyledCard = styled(Card)`
    max-width: 300px;
    margin: auto;

    &:hover {
        background-color: ${({ theme }) => theme.colors['100']};
    }
`;

const CardItem: React.FC<Props> = ({ src, alt, title, description }) => {
    return (
        <StyledCard
            isPressable
            onPress={() => console.log(`item ${title} pressed`)}
            className="py-4 max-w-[300px] mx-auto hover:bg-blue-100"
        >
            <CardBody className="overflow-visible py-2">
                <Image alt={alt} shadow="md" src={src} width={270} height={280} isZoomed />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{title}</h4>
                <p className="text-default-500 text-left">{description}</p>
            </CardFooter>
        </StyledCard>
    );
};

export default CardItem;
