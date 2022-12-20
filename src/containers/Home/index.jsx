import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Titulo from "../../components/Title"
import { Button, Container, Content, Image, Input, InputLabel } from "./styles"

import Chat from "../../assets/chat.svg"
import Arrow from "../../assets/arrow.svg"

function App() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    })
    setUsers([...users, newUser])

    navigate("/users")
  }

  return (
    <Container>
      <Image alt="pessoas conversando" src={Chat} />
      <Content>
        <Titulo>Olá</Titulo>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="escreva seu nome completo" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="escreva quantos anos você tem" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="seta para a direita " />
        </Button>
      </Content>
    </Container>
  )
}

export default App
