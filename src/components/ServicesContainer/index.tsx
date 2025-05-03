import React from 'react';

import * as S from './styles';
import { ServicesCard } from '../ServicesCard';
import { Button } from '../Button';

export const ServicesContainer = () => {
    return (
        <S.Container>
            <S.Title>Preparação para a Atuação</S.Title>

            <ServicesCard
                title="Workshop"
                text="Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim  para editar o conteúdo, a fonte e mais."
            />

            <ServicesCard
                title="Workshop"
                text="Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim  para editar o conteúdo, a fonte e mais."
            />

            <ServicesCard
                title="Workshop"
                text="Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim  para editar o conteúdo, a fonte e mais."
            />

            <S.ButtonContainer>
                <Button textButton="Leia mais" />
            </S.ButtonContainer>
        </S.Container>
    );
};