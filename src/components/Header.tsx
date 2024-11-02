'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { ArrowRight } from '@/components/Icons';
import Logo from '@/components/Logo';
import styled from 'styled-components';
import ButtonLink from '@/components/ui/ButtonLink';
import { Path } from '@/lib/enums';

const StyledNavbar = styled(Navbar)`
    background-color: ${({ theme }) => theme.colors.blue['50']};
    border-color: ${({ theme }) => theme.colors.border};
`;

const Header: React.FC = () => {
    return (
        <StyledNavbar maxWidth="xl" isBordered>
            <NavbarBrand>
                <Logo radius="none" />
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ButtonLink
                        href={Path.CONTACT_PAGE}
                        label="Contact us"
                        endContent={<ArrowRight />}
                        bgcolor="600"
                    />
                </NavbarItem>
            </NavbarContent>
        </StyledNavbar>
    );
};

export default Header;
