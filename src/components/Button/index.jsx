import { Container } from "./styles"

export function Button({ title, icon: Icon, amountOfOrders, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title} {amountOfOrders && `(${amountOfOrders})`}
    </Container>
  )
}