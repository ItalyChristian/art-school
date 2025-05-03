import React from 'react';
import * as S from './styles';

export type ButtonProps = {
    textButton: string;
    onButtonClick?: () => void;
    width?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ textButton, onButtonClick, width, type }: ButtonProps) => {
    return (
        <S.Button type={type} width={width} onClick={onButtonClick}>{textButton}</S.Button>
    );
};

