import React from 'react';

import * as S from './styles';
import Image from 'next/image';

export type LogoLinkProps = {
    text: string;
    srcImg?: string;
    link: string;
  };

export const MenuLogo = ({ text, srcImg = '', link }: LogoLinkProps) => {
    return (
      <S.Container href={link}>
        {!!srcImg && <Image src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Container>
    );
};