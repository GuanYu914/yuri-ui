import styled from "styled-components";

import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  font-weight: normal;
  border-radius: 16px;
  display: inline-block;
  padding: ${(props) => props.size === "small" && "7px 25px 8px"};
  padding: ${(props) => props.size === "medium" && "9px 30px 11px"};
  padding: ${(props) => props.size === "large" && "14px 30px 16px"};
  color: ${(props) => (props.primary ? "#686868" : "#f7d425")};
  background-color: ${(props) => (props.primary ? "#f7d425" : "#686868")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.primary ? "#d1ba47" : "#454545")};
  }
`;
