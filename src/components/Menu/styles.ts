import styled, { css } from 'styled-components';

type MenuVisible = {
  visible?: boolean;
  theme?: any;
}

const menuVisible = () => css `
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div<MenuVisible>`
  background-color: var(--dark-grey);
  color: white;

  @media (max-width: 768px) {
    ${({ visible }) => css`
      height: ${visible ? '100vh' : 'unset'};

      align-items: center;
      justify-content: center;
    `}
  }
`;

export const Content = styled.div<MenuVisible>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem 0 2.5rem;

  @media (max-width: 768px) {
    ${({ visible }) => css`
      display: ${visible ? 'flex' : 'none'} ;
    `}
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

export const MenuMobileContainer = styled.nav`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: var(--dark-grey);
  color: white;

  @media (min-width: 769px) {
    display: none;
  }
`;