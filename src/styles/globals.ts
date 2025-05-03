import styled from "styled-components";

export const Container_Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container_Flex_Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container_Two_Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-grey);
`;

export const Error = styled.small`
  color: #8B0000;
  font-size: 0.8rem;
`;