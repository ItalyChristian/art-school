import React from 'react';
import { Container_Flex as Container_Flex } from '../../styles/globals';
import { Container_Flex_Column as Container_Flex_Column } from '../../styles/globals';
import * as S from './styles';
import { Button } from '../Button';

export const Form = () => {
    return (
        <Container_Flex_Column>
            <Container_Flex>
                <S.TableForm>
                    <S.Cell><S.Input type="text" placeholder="Nome" /></S.Cell>
                    <S.Cell><S.Input type="text" placeholder="Sobrenome" /></S.Cell>
                    <S.Cell><S.Input type="email" placeholder="Email" /></S.Cell>
                    <S.Cell><S.Input type="tel" placeholder="Telefone" /></S.Cell>

                    <S.FullWidthCell>
                        <S.TextArea placeholder="Insira sua mensagem aqui" />
                    </S.FullWidthCell>
                </S.TableForm>
            </Container_Flex>

            <Button textButton='Enviar' />
        </Container_Flex_Column>
    );
};