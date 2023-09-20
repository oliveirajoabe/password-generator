import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-bottom: 2.6rem;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;

    .rangeAmount {
      font-size: ${theme.font.size.large};
      color: ${theme.colors.neonGreen};
    }
  `}
`;
