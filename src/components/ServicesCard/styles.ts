import styled from 'styled-components';
import { Container_Two_Items as Container_Two_Items } from '../../styles/globals';

export const Card = styled(Container_Two_Items)`
  width: 90vw;
  min-height: 15rem;

  padding: 0 4rem 0 4rem;

  color: white;

  @media (max-width: 768px) {
    padding: 0 2rem 0 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.5rem;

  font-size: 4rem;

  svg {
    width: 2rem;
    height: 2rem;

    color: var(--main-red);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const RightSide = styled.div`
  display: block;
  align-items: center;
  gap: 0.5rem;

  padding-left: 1rem;

  font-size: 1.2rem;
  border-left: 3px solid var(--main-red);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    border-left: 2px solid var(--main-red);
  }
`;