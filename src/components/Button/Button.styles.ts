import styled, { css } from "styled-components";

const baseStyle = css`
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
`;

export const BaseButton = styled.button`
  ${baseStyle}
`;

export const VariantDefault = styled(BaseButton)`
  background: green;
  color: white;
`;

export const VariantOutline = styled(BaseButton)`
  background: white;
  color: green;
  border: 1px solid;
`;

