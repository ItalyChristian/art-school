import React from 'react';
import * as S from './styles';
import { Button } from '../Button';
import Image from 'next/image';

export type ContainerThreeProps = {
    text: string;
    image?: any;
}

export const ContainerThree = ({ text, image  }: ContainerThreeProps) => {
    return (
        <S.Container>
            <S.ImageContainer>
                <img alt="Ilust" src="https://static.wixstatic.com/media/e4f166_5bb6ef976a1e4980acde805e5220db88~mv2_d_4831_3490_s_4_2.jpg/v1/fill/w_535,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f166_5bb6ef976a1e4980acde805e5220db88~mv2_d_4831_3490_s_4_2.jpg" />
            </S.ImageContainer>

            <S.Content>
                <S.Paragraph>{text}</S.Paragraph>

                <S.ButtonContainer>
                    <Button textButton="Leia mais" />
                </S.ButtonContainer>
            </S.Content>
        </S.Container>
    );
};