import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Banner, PlatesFood } from "./styles"
import { Header } from "../../components/Header"
import { CardItem } from "../../components/CardItem"
import { Footer } from "../../components/Footer"
import { Menu } from "../../components/Menu"
import { useAuth } from "../../hooks/auth"
import imageBanner from "../../assets/image-banner.svg"
import ravanello from "../../assets/ravanello.png"
import gambe from "../../assets/gambe.png"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { api } from "../../service/api"

export function Home() {
  const [isDesktop, setIsDesktop] = useState(false)

  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [numberOrder, setNumberOrder] = useState("0")

  function handleSearchChange(newValue) {
    setSearch(newValue)
  }

  function handleOrder(numberDishes) {
    setNumberOrder(numberDishes)
  }

  // Hook para verificar o tamanho da tela
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1200)
    }

    handleResize();
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  useEffect(() => {
    async function fetchDishes() {
      let response = await api.get(`/dishes?name=${search.toLowerCase()}&ingredients`, { withCredentials: true })
      
      if (response.data.length === 0) {
        response = await api.get(`/dishes?name&ingredients=${search.toLowerCase()}`, { withCredentials: true })
      }
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header onChangeSearch={handleSearchChange} numberOrders={numberOrder} />
      <main>
        <Banner>
          <img src={imageBanner} alt="" />
          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>

        <PlatesFood>
          <h2>Refeições</h2>
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={16} 
            navigation
            loop={isDesktop}
            modules={[Navigation, Pagination]}
          >
            {
              dishes.filter(dish => dish.category == "Refeição").map(dish => (
                <SwiperSlide key={String(dish.id)}>
                  <CardItem
                    to={`/details/${dish.id}`}
                    food={dish}
                    handleOrder={handleOrder}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </PlatesFood>

        <PlatesFood>
          <h2>Sobremesas</h2>
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={16} 
            navigation
            loop={isDesktop}
            modules={[Navigation, Pagination]}
          >
            {
              dishes.filter(dish => dish.category == "Sobremesa").map(dish => (
                <SwiperSlide key={String(dish.id)}>
                  <CardItem
                    to={`/details/${dish.id}`}
                    food={dish}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </PlatesFood>

        <PlatesFood>
          <h2>Bebidas</h2>
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={16} 
            navigation
            loop={isDesktop}
            modules={[Navigation, Pagination]}
          >
            {
              dishes.filter(dish => dish.category == "Bebida").map(dish => (
                <SwiperSlide key={String(dish.id)}>
                  <CardItem
                    to={`/details/${dish.id}`}
                    food={dish}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </PlatesFood>
      </main>
      <Footer />
    </Container>
  )
}
