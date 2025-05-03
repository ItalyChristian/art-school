import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { ContainerThree } from '../ContainerThree';

export const AboutUs = () => {
    return (
        <S.Container>
            <S.TitleContainer>
                <h2>Sobre</h2>
                <h1>Nosso estudio</h1>
            </S.TitleContainer>

            <ContainerThree
                // image="https://static.wixstatic.com/media/e4f166_5bb6ef976a1e4980acde805e5220db88~mv2_d_4831_3490_s_4_2.jpg/v1/fill/w_535,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4f166_5bb6ef976a1e4980acde805e5220db88~mv2_d_4831_3490_s_4_2.jpg"
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            />
        </S.Container>
    );
};