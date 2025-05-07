import styled from "styled-components";
import { Container_Flex as Container_Flex } from '../../styles/globals';

type ImageContainerProps = {
  $backgroundImage: string;
};

export const Container = styled(Container_Flex)`
  gap: 5rem;
  padding: 1rem 4rem 0 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;

    padding: 2rem 0 0 0;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 350rem;
  height: 47rem;

  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const Paragraph = styled.p`
  line-height: 2rem;
  font-size: 1rem;

  @media (max-width: 1024px) {
    padding: 0 2rem 1rem 2rem;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 20rem;

  @media (max-width: 1024px) {
    padding-left: 2rem;
  }
`;