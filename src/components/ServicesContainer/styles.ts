import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding-top: 2rem;
`;

export const Title = styled.h2`
  padding-left: 4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-right: 2.5rem;
  }
`;
