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
import { api } from "../../service/api"
import { useAuth } from "../../hooks/auth"

import { PiCaretLeft } from "react-icons/pi"
import { PiUploadSimple } from "react-icons/pi"

export function NewDish() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [image, setImage] = useState(null)

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]
    
    file && setImage(file)
  }

  function createFormData() {
    const dishForm = new FormData()

    dishForm.append("name", name)
    dishForm.append("description", description)
    dishForm.append("price", price)
    dishForm.append("category", category)
    dishForm.append("ingredients", JSON.stringify(ingredients))

    if (image) {
      dishForm.append("image", image)
    }

    return dishForm
  }

  async function handleNewDish() {
    const dishForm = createFormData()

    if (!name) {
      return alert("O nome do prato deve ser preenchido.")
    }

    if (!price) {
      return alert("O preço do prato deve ser preenchido.")
    }

    if (newIngredient) {
      return alert("Existe um ingrediente não adicionado. Clique no botão de adicionar ou apague o ingrediente.")
    }

    await api.post("/dishes", dishForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    alert("Prato cadastrado com sucesso!")
    navigate("/")
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonText title="Voltar" icon={PiCaretLeft} onClick={handleBack} />

        <Form onSubmit={() => event.preventDefault()}>
          <fieldset>
            <legend>Novo prato</legend>

            <div className="col-3">
              <label htmlFor="imagePlate" className="imagePlate">
                <Label htmlFor="imagePlate">Imagem do prato</Label>
                <input type="file" id="imagePlate" onChange={handleChangeImage} />

                <div>
                  <PiUploadSimple />
                  {image ? image.name : "Selecione imagem"}
                </div>
              </label>

              <div className="wrapper-input">
                <Label htmlFor="name">Nome</Label>
                <Input 
                  placeholder="Ex.: Salada Ceasar" 
                  id="name"
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="wrapper-input">
                <Label htmlFor="category">Categoria</Label>
                <select name="" value={category} id="category" onChange={e => setCategory(e.target.value)}>
                  <option value=""></option>
                  <option value="Refeição">Refeição</option>
                  <option value="Lanche">Lanche</option>
                  <option value="Bebida">Bebida</option>
                  <option value="Sobremesa">Sobremesa</option>
                </select>
              </div>
            </div>

            <div className="col-2">
              <div className="wrapper-input">
                <Label>Ingredientes</Label>
                <div className="wrapper-tags">
                  {
                    ingredients.map((ingredient, index) => (
                      <Tag
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  <Tag 
                    isNew 
                    placeholder="Adicionar" 
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>

              <div className="wrapper-input">
                <Label htmlFor="price">Preço</Label>
                <Input 
                  placeholder="R$ 00,00" 
                  id="price" 
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="wrapper-input">
              <Label htmlFor="description">Descrição</Label>
              <TextArea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                id="description"
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <Button className="save" title="Salvar alterações" onClick={handleNewDish} />
          </fieldset>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
