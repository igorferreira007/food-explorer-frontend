import { Container } from "./styles"
import minus from "../../assets/Minus.svg"
import plus from "../../assets/Plus.svg"
import { useState, useEffect } from "react"

export function AddRemoveItem({ handleNumberDishes = () => {} }) {
  const [quantity, setQuantity] = useState(1)

  function addQuantity() {
    setQuantity(prev => prev + 1)
  }

  function removeQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  useEffect(() => {
    handleNumberDishes(quantity)
  }, [quantity, handleNumberDishes])

  return(
    <Container>
      <button onClick={removeQuantity}>
        <img src={minus} alt="" />
      </button>

      <span id="quantity">{quantity}</span>

      <button onClick={addQuantity}>
        <img src={plus} alt="" />
      </button>
    </Container>
  )
}