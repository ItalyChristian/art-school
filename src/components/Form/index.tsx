import React from 'react';

import * as S from './styles';
import { Container_Flex as Container_Flex } from '../../styles/globals';
import {Error as Error } from '../../styles/globals';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(1, "O preenchimento do nome é obrigatório"),
    surname: z.string().min(1, "O preenchimento do sobrenome é obrigatório"),
    email: z.string().min(11, "O preenchimento do e-mail é obrigatório").email('Formato de e-mail inválido'),
    cellphone: z.string().min(1, "O preenchimento do celular é obrigatório"),
    questions: z.string().min(1, "O preenchimento da mensagem é obrigatório"),
});
type schema = z.infer<typeof schema>

export const Form = () => {

    const {
        register: registerFirst,
        handleSubmit: handleSubmitFirst,
        formState: { errors: errorsFirst },
      } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        alert('Enviado com sucesso')
    };

    return (
        <S.Container onSubmit={handleSubmitFirst(onSubmit)}>
            <Container_Flex>
                <S.TableForm >
                    <S.Cell>
                        <S.Input type="text" placeholder="Nome" {...registerFirst('name')} maxLength={400} />
                        {errorsFirst.name && <Error>{errorsFirst.name.message}</Error>}
                    </S.Cell>

                    <S.Cell>
                        <S.Input type="text" placeholder="Sobrenome" {...registerFirst('surname')} maxLength={400} />
                        {errorsFirst.surname && <Error>{errorsFirst.surname.message}</Error>}
                    </S.Cell>

                    <S.Cell>
                        <S.Input type="email" placeholder="Email" {...registerFirst('email')} maxLength={35} />
                        {errorsFirst.email && <Error>{errorsFirst.email.message}</Error>}
                    </S.Cell>

                    <S.Cell>
                        <S.Input type="tel" placeholder="Telefone" {...registerFirst('cellphone')} />
                        {errorsFirst.cellphone && <Error>{errorsFirst.cellphone.message}</Error>}
                    </S.Cell>

                    <S.FullWidthCell>
                        <S.TextArea placeholder="Insira sua mensagem aqui" {...registerFirst('questions')} />
                        {errorsFirst.questions && <Error>{errorsFirst.questions.message}</Error>}
                    </S.FullWidthCell>
                </S.TableForm>
            </Container_Flex>

            <Button textButton='Enviar' width="20rem" />
        </S.Container>
    );
};