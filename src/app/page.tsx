import React from 'react';
import CardsBlock from '@/components/blocks/CardsBlock';
import ButtonLink from '@/components/ui/ButtonLink';
import { ArrowRight } from '@/components/Icons';
import { Path } from '@/lib/enums';
import FullHeightSection from '@/components/styled/FullHeightSection';
import ResponsiveContainer from '@/components/styled/ResponsiveContainer';
import MostImportantBlock from '@/components/blocks/MostImportantBlock';
import YouTubeBlock from '@/components/blocks/YouTubeBlock';
import AlsoImportantBlock from '@/components/blocks/AlsoImportantBlock';
import LessImportantBlock from '@/components/blocks/LessImportantBlock';

const Home: React.FC = () => {
    return (
        <>
            <FullHeightSection $bgcolor="50">
                <ResponsiveContainer $bgcolor="50">
                    <MostImportantBlock />
                    <YouTubeBlock />
                </ResponsiveContainer>
            </FullHeightSection>
            <ResponsiveContainer $pt="3rem" $pb="3rem" $asColumn>
                <AlsoImportantBlock />
                <CardsBlock />
                <ButtonLink
                    href={Path.CONTACT_PAGE}
                    label="Contact us"
                    endContent={<ArrowRight />}
                    bgcolor="600"
                />
            </ResponsiveContainer>
            <ResponsiveContainer $bgcolor="50" $pt="3rem" $pb="3rem" $asColumn>
                <LessImportantBlock />
                <ButtonLink
                    href={Path.CONTACT_PAGE}
                    label="Contact us"
                    endContent={<ArrowRight />}
                    bgcolor="600"
                />
            </ResponsiveContainer>
        </>
    );
};

export default Home;
