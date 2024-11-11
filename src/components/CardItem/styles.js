import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  /* width: 21rem;
  height: 29.2rem; */
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  //justify-content: space-between;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: center center;

  &:hover {
    transform: scale(1.05);
  }

  > button:first-child {
    background: none;
    border: none;
    width: 2.4rem;
    height: 2.2rem;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    img {
      width: 100%;
    }

    svg {
      color: white;
      font-size: 2.4rem;
    }
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  > p {
    display: none;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    line-height: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    width: 100%;
    margin-top: auto;

    > button:last-child {
      /* width: 16.2rem; */
      width: 100%;
      height: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1200px) {
    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    > span {
      font-size: 3.2rem;

      line-height: 160%;
    }

    > p {
      display: block;
      font-family: "Roboto";
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-align: center;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* Número máximo de linhas */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div {
      flex-direction: row;
      justify-content: space-evenly;

      > button {
        width: 9.2rem !important;
        height: 100% !important;
        padding-block: 1.2rem;
      }
    }
  }
`
