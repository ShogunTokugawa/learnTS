import styled from "styled-components";

export const Wrapper = styled.nav`
  display: block;
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
`;

export const Listed = styled.li`
  &:after {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
    color: #6c757d;
    content: "/";
  }

  &:last-child {
    &:after {
      content: " ";
    }
  }
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  
  &:hover {
    color: green;
  }
`;