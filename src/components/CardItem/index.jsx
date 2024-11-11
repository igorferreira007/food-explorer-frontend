import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { AddRemoveItem } from "../AddRemoveItem"
import heart from "../../assets/Heart.svg"
import { Button } from "../Button"
import { Link } from "react-router-dom"
import { FiPenTool } from "react-icons/fi"
import { PiPencilSimpleBold } from "react-icons/pi"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { useAuth } from "../../hooks/auth"
import { api } from "../../service/api"
import dishPlaceholder from "../../assets/dishPlaceholder.png"

export function CardItem({ food, to, handleOrder }) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [like, setLike] = useState(false)
  const [numberDishes, setNumberDishes] = useState(1)

  const imageUrl = food.image ? `${api.defaults.baseURL}/files/${food.image}` : dishPlaceholder

  function handleEditOrLike() {
    if (user.is_admin) {
      navigate(`/edit/${food.id}`)
    }
    
    if (like) {
      setLike(false)
    } else {
      setLike(true)
    }
  }

  function changeNumberDishes(newNumberDishes) {
    setNumberDishes(newNumberDishes)
  }

  return (
    <Container>
      <button onClick={handleEditOrLike}>
        {
          user.is_admin ?
          <PiPencilSimpleBold />
          : like ?
          <FaHeart />
          : 
          <FaRegHeart />
        }
      </button>

      <img src={imageUrl} alt="" />

      <Link to={to}>
        <h3>{food.name} &#62;</h3>
      </Link>

      <p>{food.description}</p>
      <span>R$ {food.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      
      {
        !user.is_admin ?
        (
          <div>
            <AddRemoveItem handleNumberDishes={changeNumberDishes} />
            <Button title="Incluir" onClick={() => handleOrder(numberDishes)} />
          </div>
        ) : null
      }
    </Container>
  )
}