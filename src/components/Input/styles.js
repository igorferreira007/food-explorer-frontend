import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding-inline: 1.6rem;
  border-radius: .8rem;
  height: 4.8rem;

  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 100%;
    height: 100%;
    padding-block: 1.4rem;
    font-weight: 400;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`