import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.2rem;
    font-weight: 300;
  }

  > div {
    img {
      filter: brightness(0) saturate(100%) invert(34%) sepia(6%) saturate(942%) hue-rotate(157deg) brightness(92%) contrast(88%);
      width: 2.2rem;
      height: 2.2rem;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 1.4rem;
    }
  }
`