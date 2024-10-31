import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    padding: 3.2rem;
    max-width: 1122px;
    width: 100%;
    margin: 0 auto;
    flex: 1;
  }

  @media (min-width: 1200px) {
    main {
      padding: 4rem 0;
    }
  }
`

export const Form = styled.form`
  .imagePlate {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    input {
      display: none;
    }

    div {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;
      padding: 1.2rem 3.2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 24px;

      svg {
        font-size: 2.4rem;
      }
    }
  }

  .save {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .col-3,
  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  legend {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 3.6rem;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    select {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 400;
      outline: none;
      font-family: "Roboto", sans-serif;
      padding: 1.32rem;
      height: 4.8rem;
    }

    > div {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  .wrapper-tags {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0.8rem;
    border-radius: 0.8rem;
  }

  @media (min-width: 1200px) {
    .col-3,
    .col-2 {
      flex-direction: row;
      align-items: center;
      gap: 3.2rem;
    }

    .col-3 {
      > :nth-child(2) {
        flex: 1;
      }

      > :nth-child(3) {
        width: 36.4rem;
      }
    }

    .col-2 {
      > :nth-child(1) {
        flex: 1;
      }
    }

    .save {
      width: fit-content;
      padding: 1.2rem 2.4rem;
      margin-left: auto;
    }
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: "Roboto";
  font-size: 1.6rem;
`
