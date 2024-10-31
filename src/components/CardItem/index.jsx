import { useState } from "react"
import { Container } from "./styles"
import { AddRemoveItem } from "../AddRemoveItem"
import heart from "../../assets/Heart.svg"
import { Button } from "../Button"
import { Link } from "react-router-dom"
import { FiPenTool } from "react-icons/fi"
import { PiPencilSimpleBold } from "react-icons/pi"
import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api"
import dishPlaceholder from "../../assets/dishPlaceholder.png"

export function CardItem({ food, to }) {
  const { user } = useAuth()

  const imageUrl = food.image ? `${api.defaults.baseURL}/files/${food.image}` : dishPlaceholder

  return (
    <Container>
      <button>
        {
          user.is_admin ?
          <PiPencilSimpleBold /> : <img src={heart} alt="" />
        }
      </button>

      <img src={imageUrl} alt="" />

      <Link to={to}>
        <h3>{food.name} &#62;</h3>
      </Link>

      <p>{food.description}</p>
      <span>R$ {food.price}</span>
      
      {
        !user.is_admin ?
        (
          <div>
            <AddRemoveItem />
            <Button title="Incluir" />
          </div>
        ) : null
      }
    </Container>
  )
}