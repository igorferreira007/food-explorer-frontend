import styled from "styled-components"

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  position: sticky;
  top: 0;
  z-index: 2;

  .input {
    display: none;
  }

  .btnReceipt {
    display: none;
  }

  .btnSignOut {
    display: none;
  }

  .logo {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1122px;
    margin: 0 auto;

    > button:last-child,
    button:first-child {
      background: none;
      border: none;
    }

    .menuBtn {
      width: 2.4rem;
      height: 1.8rem;
    }

    .receipt {
      width: 2.6rem;
      height: 2.2rem;
      position: relative;
      visibility: ${({ $isadmin }) => ($isadmin ? "hidden" : "visible")};

      span {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        font-weight: 500;
        position: absolute;
        top: -40%;
        right: -40%;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }

    .wrapper-logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
      }

      h1 {
        font-size: 2rem;
      }

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 2.4rem;

    .menuBtn {
      display: none;
    }

    .input {
      display: flex;
    }

    .btnReceipt {
      display: flex;
      max-width: 21.6rem;
    }

    .btnSignOut {
      display: block;
      width: 3.2rem;
      height: 3.2rem;
      background: none;

      svg {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > div {
      gap: 3.2rem;

      button:last-child {
        display: none;
      }

      .wrapper-logo {
        flex-direction: column;
        gap: 0;
        align-items: end;

        img {
          width: 3rem;
          height: 3rem;
        }

        h1 {
          font-size: 2.4rem;
        }
      }
    }
  }
`
