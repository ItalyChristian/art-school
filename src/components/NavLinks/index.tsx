import React from 'react';

import * as S from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';

export type NavLinksProps = {
	links: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
    if (links.length === 0) return null;

    const [firstLink, ...restLinks] = links;

    return (
        <>
            <S.Container>
                <S.FirstItem><MenuLink key={firstLink.id} {...firstLink} /></S.FirstItem>
                
                {restLinks.map((link) => (
                <MenuLink key={link.id} {...link} />
                ))}
            </S.Container>
        </>
    );
};