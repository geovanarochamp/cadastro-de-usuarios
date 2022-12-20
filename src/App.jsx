import { useRef, useState } from "react"
import axios from "axios"

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

function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    // const { data: newUser } = await axios.post("http://localhost:3001/users", {
    //   name: inputName.current.value,
    //   age: inputAge.current.value,
    // })

    // setUsers([...users, newUser])

    const { data: usersList } = await axios.get("http://localhost:3001/users")
    setUsers(usersList)
    console.log(usersList)
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
