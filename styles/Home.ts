import styled, { css } from 'styled-components';

interface LightSwitchProps {
  activeTheme: string;
}

export const LinkToHome = styled.a`
  cursor: pointer;
`;

export const Container = styled.span`
  background: ${({ theme }) => theme.gradient};
  @media (max-width: 1160px) {
    background: ${({ theme }) => theme.colors.background};
  }
  img {
    margin: 2rem;
  }
  svg {
      ${({ theme }) => css`
        margin: 1rem 2rem;
        color: ${theme.colors.text};
        transition: color 0.2s;
        &:hover {
          color: ${theme.colors.purple};
        }
      `}
    }
    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }
`;

export const LightSwitch = styled.div<LightSwitchProps>`
  svg {
    cursor: pointer;
  }
  ${({ activeTheme }) =>
    activeTheme === 'dark' &&
    css`
      svg:hover {
        color: #ffff00 !important;
      }
    `}
`;