import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;

  main {
    max-width: 450px;
    padding: 3.2rem 3.6rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;

    main {
      max-width: 1122px;
      width: 100%;
      padding: 0;
      margin-top: 2.4rem;

      > button {
        margin-bottom: 4.4rem;
      }

      > a:first-child {
        margin-bottom: 4.2rem;
      }
    }
  }
`

export const Ingredient = styled.span`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px;
`

export const ButtonDetails = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1rem;
  padding: 1.2rem 4.4rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 1.8rem;
    height: 1.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:last-child {
      display: flex;
      gap: 1.6rem;
      justify-content: space-evenly;
      width: 100%;
    }
  }

  > img {
    width: 26.4rem;
    height: 26.4rem;
    margin: 0 auto 1.6rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 2.4rem;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    margin-bottom: 2.4rem;
    text-align: center;
    line-height: 140%;
  }

  .ingredients {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    margin-bottom: 4.8rem;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 4.8rem;

    > img {
      margin: 0;
      width: 39rem;
      height: 39rem;
    }

    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 24px;
      text-align: left;
    }

    > div {
      align-items: start;

      > div:last-child {
        justify-content: start;
        width: fit-content;

        button {
          font-size: 1.4rem;
        }
      }
    }
  }
`
