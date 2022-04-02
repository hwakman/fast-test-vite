import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  margin: 0 0.5em;
  padding: 0.3em 0.5em;
  border-radius: 0.4em;
  box-sizing: border-box;
  border: 1px solid #1a44a4;
`;

export const TextBox = styled.span`
  padding: 0.2em 0.4em;
  box-sizing: border-box;

  color: ${props => props.color || "#000"};
  font-size: ${props => props.fontSize || "1em"};
  width: ${props => props.widht || "fit-content"};
  font-weight: ${props =>  props.fontWeight || "normal"};
`;