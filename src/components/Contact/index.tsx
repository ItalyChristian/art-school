import React from 'react';
import * as S from './styles';

import { Form } from '../Form';

export const Contact = () => {
    return (
        <S.Container>
            <S.TitleContainer>
                <h1>Dúvidas?</h1>
                <h2>Pergunte o que quiser.</h2>
            </S.TitleContainer>

            <Form />
        </S.Container>
    );
};