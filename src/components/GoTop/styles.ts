import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 6;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 768px) {
    position: unset;
  }
`;
