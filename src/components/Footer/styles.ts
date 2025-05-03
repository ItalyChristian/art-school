import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: var(--main-red);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;