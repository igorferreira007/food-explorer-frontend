import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: none;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 1.6rem;
  margin-right: auto;

  svg {
    font-size: 3.2rem;
  }
`
