import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 1rem;
  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};
  height: 3.2rem;
  padding-inline: 1.6rem;

  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 100%;
    width: 100px;
  }

  > button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 1.6rem;
    height: 1.6rem;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
      font-size: 1.6rem;
    }
  }
`