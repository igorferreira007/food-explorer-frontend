import { Container } from "./styles"
import LogoSvg from "../../assets/Logo.svg"

export function Logo() {
  return (
    <Container>
      <img src={LogoSvg} alt="" />
      <h1>food explorer</h1>
    </Container>
  )
}