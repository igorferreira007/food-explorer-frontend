import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  > img {
    width: 4.4rem;
    height: 4.4rem;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.8rem;
    font-family: "Roboto", sans-serif;
    white-space: nowrap;
  }

  @media (min-width: 425px) {
    h1 {
      font-size: 3.6rem;
    }
  }
`