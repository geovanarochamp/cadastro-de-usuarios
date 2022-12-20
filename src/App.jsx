import {
  Button,
  Container,
  Content,
  Image,
  Input,
  InputLabel,
  Titulo,
  User,
} from "./styles"

import Chat from "./assets/chat.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
import { useRef, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ])
  }

  function deleteUser(userId) {
    const newUsersList = users.filter((user) => user.id !== userId)
    setUsers(newUsersList)
  }

  return (
    <Container>
      <Image alt="pessoas conversando" src={Chat} />
      <Content>
        <Titulo>Olá!</Titulo>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="escreva seu nome completo" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="escreva quantos anos você tem" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="seta para a direita " />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <span>{user.name}</span>
              <span>{user.age}</span>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
      </Content>
    </Container>
  )
}

export default App
