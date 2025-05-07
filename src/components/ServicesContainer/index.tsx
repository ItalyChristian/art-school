import React from 'react';

import * as S from './styles';
import { ServicesCard } from '../ServicesCard';
import { Button } from '../Button';
import { Heading } from '../Heading';

export const ServicesContainer = () => {
    return (
        <S.Container>
            <Heading as='h2' size='1.75rem'>Preparação para a Atuação</Heading>

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