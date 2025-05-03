import React, { useState } from 'react';

import * as S from './styles';
import { NavLinks } from '../NavLinks';
import { MenuLogo } from '../MenuLogo';
import { MenuLinkProps } from '../MenuLink';

import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export type MenuProps = {
    links:  MenuLinkProps[];
}

export const Menu = ({ links }: MenuProps) => {
    const text = "Escola de Artes";
    const link = "https://victorious.fandom.com/pt-br/wiki/Hollywood_Arts_High_School";
    const [visible, setVisible] = useState<boolean>(false);
  
    return (
      <>
        <S.Container>
            <div>
                {visible ? (
                    <S.Button onClick={() => setVisible(false)} aria-label="Fechar menu">
                        <IoCloseSharp />
                    </S.Button>
                ) : (
                    <S.Button visible={visible} onClick={() => setVisible(true)} aria-label="Abrir menu">
                        <IoMenu aria-label="Abrir menu" />
                    </S.Button>
                )}
            </div>
  
            <S.Content>
                <MenuLogo text={text} link={link} />
                <NavLinks links={links} />
            </S.Content>
        </S.Container>
  
        {/* MENU MOBILE */}
        {visible && (
          <S.MenuMobileContainer>
            <NavLinks links={links} />
          </S.MenuMobileContainer>
        )}
      </>
    );
};