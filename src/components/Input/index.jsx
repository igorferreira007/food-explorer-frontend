import { Container } from "./styles"

export function Input({ icon: Icon, id, value, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <input id={id} defaultValue={value} {...rest} />
    </Container>
  )
}