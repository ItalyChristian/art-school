import React from 'react';
import * as S from './styles';

import { Form } from '../Form';

export const Contact = () => {
    return (
        <S.Container>
            <S.TitleContainer>
                <h2>Contato</h2>
                <h1>Dúvidas?</h1>
                <h3>Pergunte o que quiser.</h3>
            </S.TitleContainer>

            <Form />
        </S.Container>
    );
};