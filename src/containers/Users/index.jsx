import { useEffect, useState } from "react"
import axios from "axios"

import {
  Button,
  Container,
  Content,
  Image,
  Titulo,
  User,
} from "./styles"

import Avatar from "../../assets/avatars.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const { data: usersList } = await axios.get("http://localhost:3001/users")
      setUsers(usersList)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsersList = users.filter((user) => user.id !== userId)
    setUsers(newUsersList)
  }

  return (
    <Container>
      <Image alt="pessoas conversando" src={Avatar} />
      <Content>
        <Titulo>Usuários</Titulo>
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

        <Button>
          <img src={Arrow} alt="seta para a direita " />
          Voltar
        </Button>
      </Content>
    </Container>
  )
}

export default Users
