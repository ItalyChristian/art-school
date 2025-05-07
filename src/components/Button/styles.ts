import styled from 'styled-components';

type ButtonProps = {
  $width?: string;
};

export const Button = styled.button<ButtonProps>`
  width: ${({ $width }) => $width || 'auto'};

  padding: 0.75rem 1.5rem;

  font-size: 1rem;
  color:var(--dark-grey);
  cursor: pointer;
  border: none;

  transition: background-color 0.3s ease;
  background-color: var(--main-red);

  &:hover {
    background-color: var(--dark-grey);
    color: var(--main-red)
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;