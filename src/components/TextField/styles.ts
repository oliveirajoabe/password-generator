import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.almostWhite};
    background-color: ${theme.colors.dark};
    border: none;
    padding: 1.19rem 2rem;
  `}
`;

export const Placeholder = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
  `}
`;

export const Value = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.almostWhite};
  `}
`;

export const WrapperCopy = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > span {
      color: ${theme.colors.neonGreen};
      margin-right: 1rem;
    }

    > svg {
      font-size: 1rem;
      &:hover {
        > path {
          fill: ${theme.colors.almostWhite};
        }
      }
    }
  `}
`;
