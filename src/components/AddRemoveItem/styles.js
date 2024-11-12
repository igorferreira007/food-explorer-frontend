import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  > button {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
  }


  @media (min-width: 1200px) {
    
    > span {
      font-size: 2rem;
    }
  }
`