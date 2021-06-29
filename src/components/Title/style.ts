import styled from "styled-components"; //, { css }

export const Caption = styled.div<{
    color: string,
    size: string,
}>`;
  color: ${props => props.color}; //проверить на пустоту
  font-size: ${props => props.size};
`;
