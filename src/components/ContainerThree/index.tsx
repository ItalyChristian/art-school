import React from 'react';
import * as S from './styles';
import { Button } from '../Button';
import Image from 'next/image';

export type ContainerThreeProps = {
    text: string;
    image: any;
}

export const ContainerThree = ({ text, image  }: ContainerThreeProps) => {
    return (
        <S.Container>
            <S.ImageContainer backgroundImage={image} />

            <S.Content>
                <S.Paragraph>{text}</S.Paragraph>

                <S.ButtonContainer>
                    <Button textButton="Leia mais" />
                </S.ButtonContainer>
            </S.Content>
        </S.Container>
    );
};