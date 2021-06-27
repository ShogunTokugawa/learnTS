import styled from "styled-components";

export const Logo = styled.img`
  height: 100px;
`;

export const Title = styled.h1<{
    size: string
}>`
  font-size: ${props => props.size};
  font-weight: 700;
`;

export const Wrapper = styled.header<{ bgColor: string }>`
  display: flex;
  background-color: ${props => props.bgColor};
  justify-content: space-between;
`;