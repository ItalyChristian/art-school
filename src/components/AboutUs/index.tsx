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
                text={"Sou um parágrafo. Você pode adicionar seu texto aqui. É fácil, clique em 'Editar texto' ou clique 2 vezes sobre mim para editar o conteúdo e mais. Você também pode me arrastar  e soltar em qualquer lugar da página. Sou um ótimo espaço para contar sua história e fazer com que os visitantes saibam um pouco mais sobre você. Use este espaço para escrever um texto longo sobre sua empresa e sobre os serviços que  você oferece. Conte aos visitantes a história de como você teve a ideia de criar essa empresa e o que o torna diferente de seus concorrentes. Você pode apresentar a sua equipe, seus projetos e metas. Faça com que a sua empresa se destaque e mostre aos visitantes quem você é. Clique em 'Editar texto' para começar."}
            />
        </S.Container>
    );
};