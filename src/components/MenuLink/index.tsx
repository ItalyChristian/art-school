import React from 'react';
import * as S from './styles';

export type MenuLinkProps = {
  id?: number;
  children: React.ReactNode;
  link: string;
  newTab: boolean;
};

export const MenuLink = ({ children, link, newTab }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <S.MenuLink href={link} target={target}>
      {children}
    </S.MenuLink>
  );
};


