import styled from 'styled-components';

type ContainerProps = {
  $backgroundImage: string;
};

export const Container = styled.div<ContainerProps>`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  position: relative;

  color: white;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  max-width: 60%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;
