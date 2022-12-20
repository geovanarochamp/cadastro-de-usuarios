import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Titulo from "../../components/Title/"

import { Button, Container, Content, Image, User } from "./styles"

import Avatar from "../../assets/avatars.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

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

  function goBackPage() {
    navigate("/")
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

        <Button onClick={goBackPage}>
          <img src={Arrow} alt="seta para a direita " />
          Voltar
        </Button>
      </Content>
    </Container>
  )
}

export default Users
