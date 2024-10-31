import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form, Label } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Tag } from "../../components/Tag"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { PiCaretLeft } from "react-icons/pi"
import { PiUploadSimple } from "react-icons/pi"

export function EditDish() {
  const [isAdmin, setIsAdmin] = useState(true)
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header role={isAdmin} />
      <main>
        <ButtonText title="Voltar" icon={PiCaretLeft} onClick={handleBack} />

        <Form onSubmit={() => event.preventDefault()}>
          <fieldset>
            <legend>Editar prato</legend>

            <div className="col-3">
              <label htmlFor="imagePlate" className="imagePlate">
                <Label htmlFor="imagePlate">Imagem do prato</Label>
                <input type="file" id="imagePlate" />

                <div>
                  <PiUploadSimple />
                  Selecione imagem
                </div>
              </label>

              <div className="wrapper-input">
                <Label htmlFor="name">Nome</Label>
                <Input placeholder="Ex.: Salada Ceasar" id="name" />
              </div>

              <div className="wrapper-input">
                <Label htmlFor="category">Categoria</Label>
                <select name="" id="category">
                  <option value="refeição">Refeição</option>
                  <option value="lanche">Lanche</option>
                  <option value="bebida">Bebida</option>
                </select>
              </div>
            </div>

            <div className="col-2">
              <div className="wrapper-input">
                <Label>Ingredientes</Label>
                <div className="wrapper-tags">
                  <Tag value="Pão Naan" />
                  <Tag value="Pão Naan" />
                  <Tag value="Pão Naan" />
                  <Tag isNew placeholder="Adicionar" />
                </div>
              </div>

              <div className="wrapper-input">
                <Label htmlFor="">Preço</Label>
                <Input placeholder="R$ 00,00" />
              </div>
            </div>

            <div className="wrapper-input">
              <Label htmlFor="">Descrição</Label>
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>
            <div className="wrapper-buttons">
              <Button className="delete" title="Excluir prato" />
              <Button className="save" title="Salvar alterações" />
            </div>
          </fieldset>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
