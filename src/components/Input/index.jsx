import { Container } from "./styles"

export function Input({ icon: Icon, id, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <input id={id} {...rest} />
    </Container>
  )
}