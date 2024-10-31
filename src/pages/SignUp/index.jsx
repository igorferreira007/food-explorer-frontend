import { Container, Form } from "./styles"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FaUser } from "react-icons/fa"
import { Label } from "../../components/Label"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../service/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

  return (
    <Container>
      <div>
        <Logo />
        <Form>
          <h2>Crie sua conta</h2>
          <div className="wrapper-input">
            <Label title="Seu nome" htmlFor="name" />
            <Input 
              placeholder="Exemplo: Maria da Silva" 
              id="name" 
              type="text" 
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="wrapper-input">
            <Label title="Email" htmlFor="email" />
            <Input 
              placeholder="Exemplo: exemplo@exemplo.com.br" 
              id="email" 
              type="email" 
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="wrapper-input">
            <Label title="Senha" htmlFor="password" />
            <Input 
              placeholder="No mínimo 6 caracteres" 
              id="password" 
              type="password" 
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button title="Criar conta" onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}
