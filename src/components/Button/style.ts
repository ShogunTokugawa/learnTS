import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button<{
    variant: string,
    type: string,
}>`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  cursor: pointer;
  
  ${props => props.variant === 'primary' && css`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  `}
  
  ${props => props.variant === 'secondary' && css`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  `}
  
  ${props => props.variant === 'success' && css`
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  `}
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: blue;
`;