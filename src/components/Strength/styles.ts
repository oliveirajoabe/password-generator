import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.colors.veryDark};
    padding: 1rem 2rem;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
  `}
`;

export const WrapperLevel = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-right: 0.97rem;
    text-transform: uppercase;
  }
`;

const itemStrength = {
  tooWeak: () => css`
    :nth-child(1) {
      background-color: ${({ theme }) => theme.colors.red};
    }
    :nth-child(n + 2) {
      border: 1px solid #fff;
    }
  `,
  weak: () => css`
    :nth-child(n + 1) {
      background-color: ${({ theme }) => theme.colors.orange};
    }
    :nth-child(n + 3) {
      border: 1px solid #fff;
      background-color: initial;
    }
  `,
  medium: () => css`
    :nth-child(n + 1) {
      background-color: ${({ theme }) => theme.colors.yellow};
    }
    :nth-child(n + 4) {
      border: 1px solid #fff;
      background-color: initial;
    }
  `,
  strong: () => css`
    :nth-child(n) {
      background-color: ${({ theme }) => theme.colors.orange};
    }
  `,
};

export const WrapperMarkerLevel = styled.div<WrapperMarkerLevelProps>`
  ${({ strength }) => css`
    display: flex;
    gap: 0.47rem;

    ${itemStrength[strength]}
  `}
`;

export const Level = styled.div`
  width: 0.625rem;
  height: 1.75rem;
`;
