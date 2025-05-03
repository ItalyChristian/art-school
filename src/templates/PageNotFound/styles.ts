import styled from 'styled-components';
import { Container_Flex_Column as Div_Flex_Clmn } from '../../styles/globals';

export const Container = styled(Div_Flex_Clmn)`
  height: 100vh;
  /* max-width: 58rem; */

  gap: 1rem;

  margin: 0 auto;
  text-align: center;
`;

export const Link = styled.a`
  font-size: 1rem;
  cursor: pointer;
`;
