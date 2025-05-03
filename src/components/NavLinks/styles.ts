import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FirstItem = styled.a`
  color: #fa6254;
`;