'use client';

import React from 'react';
import StyledLink from '@/components/styled/StyledLink';
import StyledText from '@/components/styled/StyledText';
import siteConfig from '@/config/siteConfig';
import { Path } from '@/lib/enums';
import Logo from '@/components/Logo';
import NavItem from '@/components/ui/NavItem';
import ContactItem from '@/components/ui/ContactItem';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.blue['600']};
    font-family: sans-serif;
`;

const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    width: 80%;
    padding: 3rem 1.5rem;

    @media (min-width: 640px) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const FooterText = styled(StyledText)`
    padding-top: 1rem;
    font-size: 0.875rem;
`;

const CopyrightContainer = styled.div`
    text-align: center;
    padding: 1.25rem 0;
    color: ${({ theme }) => theme.colors.white};
`;

const renderNavItems = () => {
    return (
        <ul className="space-y-4">
            {siteConfig.navigation.map(({ label, href }) => (
                <li key={`${label}__navItem`}>
                    <NavItem href={href} label={label} $colored />
                </li>
            ))}
        </ul>
    );
};

const renderContactItems = () => {
    return (
        <ul className="space-y-4">
            {siteConfig.contacts.map(({ href, label, icon }) => {
                return (
                    <li key={`${label}__contactItem`} className="flex flex-row gap-3">
                        {icon && React.createElement(icon)}
                        {href ? (
                            <ContactItem href={href!} label={label} $colored />
                        ) : (
                            <StyledText as={'span'} $pt="0" $pb="0">
                                {label}
                            </StyledText>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

const Footer: React.FC = () => (
    <FooterContainer>
        <InnerContainer>
            <ContentWrapper>
                <GridContainer>
                    <div>
                        <Logo $bgcolor="50" radius="none" />
                        <FooterText as={'p'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
                            leo et condimentum ultricies, sem urna convallis metus, vel suscipit
                            nibh lacus tincidunt ante
                        </FooterText>
                    </div>

                    <div>
                        <StyledText as={'h4'} $weight="600">
                            Navigation
                        </StyledText>
                        {renderNavItems()}
                    </div>

                    <div>{renderContactItems()}</div>
                </GridContainer>
            </ContentWrapper>
        </InnerContainer>

        <CopyrightContainer>
            &copy;&nbsp;
            <StyledLink href={Path.HOME} $weight="500" $isColored>
                {siteConfig.name}
            </StyledLink>
            ,&nbsp;{new Date().getFullYear()}
        </CopyrightContainer>
    </FooterContainer>
);

export default Footer;
