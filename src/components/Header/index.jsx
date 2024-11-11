import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { Logo } from "../Logo"
import { Menu } from "../Menu"
import { Input } from "../Input"
import { Button } from "../Button"
import menu from "../../assets/Menu.svg"
import receipt from "../../assets/Receipt.svg"
import { FiSearch } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { PiSignOutBold } from "react-icons/pi"
import { useAuth } from "../../hooks/auth"

export function Header({ onChangeSearch, numberOrders = "0" }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <div>
        <button className="menuBtn" onClick={() => setMenuIsOpen(true)}>
          <img src={menu} alt="" />
        </button>

        <div className="wrapper-logo logo" onClick={() => navigate("/")}>
          <Logo />
          {user.is_admin ? <span>admin</span> : null}
        </div>

        <Input className="input" icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={e => onChangeSearch(e.target.value)} />

        {
          user.is_admin ? (
            <Button className="btnReceipt" title="Novo prato" to="/new" />
          ) :
          <Button className="btnReceipt" icon={PiReceipt} title="Pedidos" amountOfOrders={numberOrders} />
        }

        <button title="Sair" onClick={handleSignOut} className="btnSignOut">
          <PiSignOutBold />
        </button>

        <button className="receipt">
          <img src={receipt} alt="" />
          <span>{numberOrders}</span>
        </button>
      </div>
    </Container>
  )
}
