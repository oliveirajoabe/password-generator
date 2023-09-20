import styled, { css } from "styled-components";

export const ButtonStyle = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    width: 100%;
    height: 4rem;

    border: none;

    color: ${theme.colors.dark};
    background-color: ${theme.colors.neonGreen};

    &:not([disabled]) {
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      color: ${theme.colors.neonGreen};
      border: 1px solid ${theme.colors.neonGreen};
      background-color: transparent;

      > svg > path {
        fill: ${theme.colors.neonGreen};
      }
    }
  `}
`;
