import React from 'react';

import * as S from './styles';
import { IoIosArrowDropupCircle } from "react-icons/io";

export type GoToProps = {
  handleClick: ()=> void;
};

export const GoTop = ({ handleClick }: GoToProps) => {
  return (
    <S.Container
      href="#"
      onClick={handleClick}
      aria-label="Ir para o topo"
      title="Ir para o topo"
    >
      <IoIosArrowDropupCircle  />
    </S.Container>
  );
};
