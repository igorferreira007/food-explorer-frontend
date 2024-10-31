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

  function handleSearchChange(newValue) {
    setSearch(newValue)
  }

  // Hook para verificar o tamanho da tela
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1200); // Considerando 1024px como "desktop"
    }

    handleResize(); // Verifica o tamanho na montagem inicial
    window.addEventListener('resize', handleResize); // Atualiza ao redimensionar

    return () => {
      window.removeEventListener('resize', handleResize); // Limpa o event listener ao desmontar
    };
  }, [])

  useEffect(() => {
    async function fetchDishes() {
      let response = await api.get(`/dishes?name=${search}&ingredients`)
      
      if (response.data.length === 0) {
        response = await api.get(`/dishes?name&ingredients=${search}`)
      }
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header onChangeSearch={handleSearchChange} />
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
              dishes.map(dish => (
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
          <h2>Pratos principais</h2>
          
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={16} 
            navigation
            modules={[Navigation]}
          >
            <SwiperSlide>
              <CardItem 
                food={{
                  name: "Prugna Pie",
                  price: "79,97",
                  image: ravanello,
                }}
              />
            </SwiperSlide>
            
          </Swiper>
        </PlatesFood>

        <PlatesFood>
          <h2>Pratos principais</h2>
          
          <Swiper 
            slidesPerView="auto" 
            spaceBetween={16} 
            navigation
            modules={[Navigation]}
          >
            <SwiperSlide>
              <CardItem 
                food={{
                  name: "Salada Ravanello",
                  price: "49,97",
                  image: ravanello,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem 
                food={{
                  name: "Spaguetti Gambe",
                  price: "79,97",
                  image: gambe,
                }}
              />
            </SwiperSlide>
          </Swiper>
        </PlatesFood>
      </main>
      <Footer />
    </Container>
  )
}
