import styled, { css } from 'styled-components';

type MenuVisible = {
  visible?: boolean;
  theme?: any;
}

const menuVisible = () => css `
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem 0 2.5rem;

  background-color: var(--dark-grey);
  color: white;

  @media (max-width: 768px) {
    height: 100vh;

    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button<MenuVisible>`
  ${({ visible }) => css`
    width: 4rem;
    height: 4rem;

    display: none;

    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 6;

    color: white;
    background: none;
    border: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media (max-width: 768px){
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
