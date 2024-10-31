import styled from "styled-components"

export const Container = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  border-radius: .8rem;
  resize: none;
  width: 100%;
  height: 17.2rem;
  padding: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`