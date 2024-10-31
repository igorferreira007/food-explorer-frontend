import { Container, Form } from "./styles"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FaUser } from "react-icons/fa"
import { Label } from "../../components/Label"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <div>
        <Logo />
        <Form>
          <h2>Faça login</h2>
          <div className="wrapper-input">
            <Label title="Email" htmlFor="email" />
            <Input 
              placeholder="Exemplo: exemplo@exemplo.com.br" 
              id="email" 
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
          <Button title="Entrar" onClick={handleSignIn} />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}
