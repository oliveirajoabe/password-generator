import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    .main {
      display: flex;
      margin-bottom: 1.4rem;

      .label {
        user-select: none;
      }

      > div {
        cursor: pointer;
        display: flex;
      }

      [data-state="unchecked"] {
        border: 2px solid ${theme.colors.almostWhite};
      }

      [data-state="checked"] {
        border: 2px solid ${theme.colors.neonGreen};
      }

      .checkboxRoot {
        background-color: initial;
        margin-right: 1.5rem;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      .checkboxIndicator {
        display: flex;
        background-color: ${theme.colors.neonGreen};

        width: 21px;
        height: 21px;

        align-items: center;
        justify-content: center;
      }
    }
  `}
`;
