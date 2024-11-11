import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Header, Button } from "./styles"
import { Input } from "../Input"
import { Footer } from "../Footer"
import { useAuth } from "../../hooks/auth"
import x from "../../assets/Close.svg"
import { FiSearch } from "react-icons/fi"

export function Menu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  if (menuIsOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  function handleNewDish() {
    navigate("/new")
  }

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <button onClick={onCloseMenu}>
          <img src={x} alt="" />
        </button>
        <h2>Menu</h2>
      </Header>

      <nav>
        <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />

        {
          user.is_admin ? <Button onClick={handleNewDish}>Novo prato</Button> : null
        }
        <Button onClick={signOut}>Sair</Button>
      </nav>

      <Footer />
    </Container>
  )
}