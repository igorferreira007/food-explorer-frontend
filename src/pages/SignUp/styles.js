import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: -5rem;
  height: 100vh;
  padding-inline: 2.4rem;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
    gap: 7.2rem;
  }

  @media (min-width: 1200px) {
    padding-inline: 6.4rem;

    > div {
      flex-direction: row;
      max-width: 120rem;
      justify-content: space-between;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
  }

  > h2 {
    display: none;
  }

  @media (min-width: 1200px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
    max-width: 47.6rem;
    width: 100%;

    > h2 {
      display: block;
      font-size: 3.2rem;
      font-weight: 500;
      text-align: center;
    }
  }
`