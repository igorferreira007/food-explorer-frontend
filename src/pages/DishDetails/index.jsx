import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Ingredient, ButtonDetails, Content } from "./styles"
import { Menu } from "../../components/Menu"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { AddRemoveItem } from "../../components/AddRemoveItem"
import { PiCaretLeft } from "react-icons/pi"
import ravanello from "../../assets/ravanello.png"
import receipt from "../../assets/Receipt.svg"
import { useAuth } from "../../hooks/auth"
import dishPlaceholder from "../../assets/dishPlaceholder.png"
import { api } from "../../service/api"

export function DishDetails() {
  const { user } = useAuth()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [dish, setDish] = useState({})
  const [numberDishes, setNumberDishes] = useState(1)
  const [price, setPrice] = useState(0)
  const [numberOrder, setNumberOrder] = useState("0")

  const navigate = useNavigate()
  const params = useParams()

  const imageUrl = dish?.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishPlaceholder

  function handleBack() {
    navigate(-1)
  }

  // Função responsável por atualizar o estado numberDishes
  function changeNumberDishes(newNumberDishes) {
    setNumberDishes(newNumberDishes)
  }

  function handleOrder() {
    setNumberOrder(numberDishes)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data)
    }

    fetchDish()
  }, [])

  useEffect(() => {
    function calculatePrice() {
      if (dish && dish.price) {
        setPrice(dish.price * numberDishes)
      }
    }

    calculatePrice()
  }, [numberDishes, dish])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header isAdmin onOpenMenu={() => setMenuIsOpen(true)} numberOrders={numberOrder} />
      
      {
        dish &&
        <main>
        <ButtonText title="Voltar" icon={PiCaretLeft} onClick={handleBack} />

        <Content>
          <img src={imageUrl} alt="" />
          <div>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>

            {
              dish.ingredients &&
              <div className="ingredients">
                {
                  dish.ingredients.map(ingredient => (
                    <Ingredient key={String(ingredient.id)}>{ingredient.name}</Ingredient>
                  ))
                }
              </div>
            }

            {user.is_admin ? (
              <div>
                <Button title="Editar prato" to={`/edit/${dish.id}`} />
              </div>
            ) : (
              <div>
                <AddRemoveItem handleNumberDishes={changeNumberDishes} />
                
                <ButtonDetails onClick={handleOrder}>
                  <img src={receipt} alt="" />
                  pedir ∙ R$ {price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </ButtonDetails>
              </div>
            )}
          </div>
        </Content>
      </main>
      }
      <Footer />
    </Container>
  )
}
