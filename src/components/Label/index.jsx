import { Container } from "./styles"

export function Label({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}