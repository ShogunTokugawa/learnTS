import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  type: string,
}>`
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  
  ${props => props.type === 'primary' && css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  `}
  
  ${props => props.type === 'secondary' && css`
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  `}
  
  ${props => props.type === 'success' && css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  `}
  
  ${props => props.type === 'danger' && css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`;