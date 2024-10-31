import styled from "styled-components"

export const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  > nav {
    padding: 3.6rem 2.8rem;

    div {
      margin-bottom: 3.6rem;
    }
  }

  > footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  gap: 1.6rem;
  align-items: center;
  padding: 5.6rem 2.8rem 2.4rem;

  > button {
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;

    img {
      width: 100%;
      height: 100%;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto";
    font-size: 2rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 140%;
  text-align: left;
  padding: 1rem;
`
