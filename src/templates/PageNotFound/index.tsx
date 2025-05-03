import React from 'react';
import * as S from './styles';

export const PageNotFound = () => {
  return (
    <S.Container>
      <h1>Erro 404</h1>

      <div>
        <p>A página que você busca não foi encontrada.</p>
        <S.Link href='/'>Clique aqui para voltar</S.Link>
      </div>
    </S.Container>
  );
};
