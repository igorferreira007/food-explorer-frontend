import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Form, Label } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Tag } from "../../components/Tag"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../service/api"

import { PiCaretLeft } from "react-icons/pi"
import { PiUploadSimple } from "react-icons/pi"

export function EditDish() {
  const navigate = useNavigate()
  const params = useParams()

  const [image, setImage] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const [dish, setDish] = useState({})

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  function handleChangeImage(event) {
    const file = event.target.files[0]

    file && setImageFile(file)

    file && setImage(file.name)
  }

  async function handleUpdateDish() {
    if (!name) {
      return alert("O nome do prato deve ser preenchido.")
    }

    if (!price) {
      return alert("O preço do prato deve ser preenchido.")
    }

    if (newIngredient) {
      return alert(
        "Existe um ingrediente não adicionado. Clique no botão de adicionar ou apague o ingrediente."
      )
    }

    const updated = {
      name,
      category,
      ingredients,
      price,
      description,
    }

    const dishUpdate = Object.assign(dish, updated)

    await updateDish({ dish: dishUpdate, imageFile })

    // navigate("/")
  }

  async function updateDish({ dish, imageFile }) {
    try {
      const dishForm = new FormData()

      dishForm.append("name", dish.name)
      dishForm.append("description", dish.description)
      dishForm.append("price", dish.price)
      dishForm.append("category", dish.category)
      dishForm.append("ingredients", JSON.stringify(dish.ingredients))

      if (imageFile) {
        dishForm.append("image", imageFile)
      }

      await api.put(`/dishes/${dish.id}`, dishForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      alert("Prato atualizado!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o prato.")
      }
    }
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir o prato?")

    if (confirm) {
      await api.delete(`dishes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data)

      const { name, description, price, image, category, ingredients } =
        response.data

      setName(name)
      setDescription(description)
      setPrice(price.toFixed(2))
      setImage(image)
      setCategory(category)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <ButtonText title="Voltar" icon={PiCaretLeft} onClick={handleBack} />

        {dish.id && (
          <Form onSubmit={() => event.preventDefault()}>
            <fieldset>
              <legend>Editar prato</legend>

              <div className="col-3">
                <label htmlFor="imagePlate" className="imagePlate">
                  <Label htmlFor="imagePlate">Imagem do prato</Label>
                  <input
                    type="file"
                    id="imagePlate"
                    onChange={handleChangeImage}
                  />

                  <div className="cursor-pointer">
                    <PiUploadSimple />
                    {image ? image : "Selecione imagem"}
                  </div>
                </label>

                <div className="wrapper-input">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    placeholder="Ex.: Salada Ceasar"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="wrapper-input">
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    name=""
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </div>
              </div>

              <div className="col-2">
                <div className="wrapper-input">
                  <Label>Ingredientes</Label>
                  <div className="wrapper-tags">
                    {dish.ingredients &&
                      ingredients.map((ingredient, index) => (
                        <Tag
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}
                          title={ingredient}
                        />
                      ))}
                    <Tag
                      isNew
                      placeholder="Adicionar"
                      value={newIngredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      onClick={() => newIngredient && handleAddIngredient()}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          newIngredient && handleAddIngredient()
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="wrapper-input">
                  <Label htmlFor="">Preço</Label>
                  <Input
                    placeholder="R$ 00,00"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="wrapper-input">
                <Label htmlFor="">Descrição</Label>
                <TextArea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="wrapper-buttons">
                <Button
                  className="delete"
                  title="Excluir prato"
                  onClick={handleRemove}
                />
                <Button
                  className="save"
                  title="Salvar alterações"
                  onClick={handleUpdateDish}
                />
              </div>
            </fieldset>
          </Form>
        )}
      </main>
      <Footer />
    </Container>
  )
}
