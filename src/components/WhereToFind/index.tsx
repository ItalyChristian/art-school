import React from 'react';
import * as S from './styles';

export const WhereToFind = () => {
    return (
        <S.Container>
            <S.Content>
                <h1>Endereço</h1>
                <S.Item>Rua fictícia, 123 - Bairro Tal, Tal Cidade, 00000-000, Brasil</S.Item>
            </S.Content>

            <S.Content>
                <h1>Contato</h1>
                <S.Item>Email: emailtal@email.com</S.Item>
                <S.Item>Tel: (00) 0000-0000</S.Item>
            </S.Content>

            <S.Content>
                <h1>Redes</h1>
                <S.Item>Facebook</S.Item>
                <S.Item>Instagram</S.Item>
            </S.Content>
        </S.Container>
    );
};