import styled from "styled-components"

export const Container = styled.div`
  > main {
    max-width: 1122px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`

export const Banner = styled.div`
  position: relative;
  margin: 4.4rem 1.6rem 6.2rem 3.6rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_200}
  );
  display: flex;
  border-radius: 0.5rem;

  > img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    bottom: 0;
    left: -3rem;
  }

  > div {
    margin: 3.6rem 0.8rem 2.2rem 15.3rem;

    h3 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins";
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      margin-bottom: 0.4rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Roboto";
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 16.8px */
    }
  }

  @media (min-width: 1200px) {
    margin: 16.4rem 0 6.2rem;

    > img {
      width: 63.2rem;
      height: 40.6rem;
      left: -9rem;
    }

    > div {
      margin: 8.8rem 10rem 9.2rem 59.8rem;

      h3 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 0.4rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`

export const PlatesFood = styled.section`
  margin-bottom: 2.4rem;
  position: relative;

  .swiper-wrapper {
    .swiper-slide:first-child {
      margin-left: 2.4rem;
    }

    .swiper-slide:last-child {
      margin-right: 2.4rem;
    }
  }

  .swiper-slide {
    width: 21rem;
    height: 29.2rem;
  }

  > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media (min-width: 1200px) {
    margin-bottom: 4.4rem;

    > h2 {
      font-size: 3.2rem;
      margin-left: 0;
      margin-bottom: 2.4rem;
    }

    .swiper-wrapper {
      .swiper-slide:first-child,
      .swiper-slide:last-child {
        margin: 0;
      }
    }

    .swiper-slide {
      width: 30.4rem;
      height: 46.2rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 3.2rem;
      height: 462px;
      position: absolute;
      top: 22px;
      padding-bottom: 6.4rem;
    }

    .swiper-button-prev {
      left: 0;
      background: linear-gradient(
        to left,
        ${({ theme }) => theme.COLORS.GRADIENT_100}
      );
      justify-content: end;
      padding-left: 3.2rem;
    }

    .swiper-button-next {
      right: 0;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.COLORS.GRADIENT_100}
      );
      padding-right: 3.2rem;
      justify-content: start;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 3rem;
    }
  }
`
