import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  color: white;
  background-color: var(--dark-grey);

  @media (max-width: 768px) {
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 2rem 0 2rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  @media (max-width: 768px) {
    gap: unset;
  }
`;

export const Item = styled.p`
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
