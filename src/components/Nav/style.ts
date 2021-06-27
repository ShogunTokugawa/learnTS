import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: 15px;
  background-color: yellow;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;

export const Link = styled.a`
  font-size: 18px;
  color: chocolate;
  text-decoration: none;
  &:hover {
    color: green;
  }
`;