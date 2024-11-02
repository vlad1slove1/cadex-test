'use client';

import React from 'react';
import siteConfig from '@/config/siteConfig';
import CardItem from '@/components/ui/CardItem';

const CardsBlock: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 p-4">
            {siteConfig.cards.map((card, index) => (
                <CardItem
                    key={index}
                    src={card.src}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardsBlock;
