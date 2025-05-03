import React from 'react';
import * as S from './styles';

export type ButtonProps = {
    textButton: string;
    onButtonClick?: () => void;
    width?: any;
    type?: any;
}

export const Button = ({ textButton, onButtonClick, width, type }: ButtonProps) => {
    return (
        <S.Button type={type} onClick={onButtonClick}>{textButton}</S.Button>
    );
};

