import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 33.75rem;
    text-align: center;

    > span {
      color: ${theme.colors.grey};
      font-size: ${theme.font.size.medium};
    }

    > div {
      margin-top: 1.94rem;
    }
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    padding: 2rem;
    background-color: ${theme.colors.dark};

    > footer {
      margin-top: 2rem;
    }
  `}
`;
