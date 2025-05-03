import styled from "styled-components";

export const TableForm = styled.form`
  min-width: 40rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;

  border: 2px solid var(--secondary-red);
  font-style: italic;

  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;
  border: 1px solid var(--secondary-red);
`;

export const FullWidthCell = styled(Cell)`
  grid-column: span 2;
`;

export const Input = styled.input`
  width: 100%;

  border: none;
  font-style: italic;
  font-size: 0.8rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;

  border: none;
  resize: none;
  font-style: italic;
  font-size: 0.8rem;
`;