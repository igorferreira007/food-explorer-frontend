import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
  padding: 1.2rem;
  border-radius: .5rem;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > svg {
    font-size: 3.2rem;
  }
`