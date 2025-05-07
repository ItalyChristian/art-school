import React from 'react';
import * as S from './styles';

export type HeadingProps = {
    children: any;
    as: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    padding?: string;
    size?: string;
    uppercase?: boolean;
  };

export const Heading = ({ children, as, size, uppercase, padding }: HeadingProps) => {
    return (
        <S.Title as={as} size={size} uppercase={uppercase} padding={padding}>
            {children}
        </S.Title>
    );
};