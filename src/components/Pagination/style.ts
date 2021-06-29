import styled from "styled-components";

export const Wrapper = styled.nav`
  display: block;
`;

export const List = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
`;

export const Link = styled.a`
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
  &:hover {
    z-index: 2;
    color: #0056b3;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
`;