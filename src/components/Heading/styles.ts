import styled from "styled-components";

type TitleProps = {
  size?: string;
  uppercase?: boolean;
  padding?: string;
};
 
export const Title = styled.h1<TitleProps>`
  font-size: ${({ size }) => size || '1rem'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'unset')};
  letter-spacing: 1rem;

  padding-left: ${({ padding }) => padding || '4rem'};

  @media (max-width: 768px) {
    letter-spacing: unset;
    padding-left: unset;
    text-align: center;
  }
`;