import { useEffect, useState } from 'react'
import Nav from '../componnet/Nav'
import { deletById, getUsers } from '../Api/apiUsers'

export default function UsersPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers()
  }, [])
  async function getAllUsers() {
    try {
      const users = await getUsers()
      setUsers(users)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div>Users</div>
      <Nav />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>type_user</th>
            <th>password</th>
          </tr>
        </thead>
        {users.map(item => (
          <tbody key={item._id}>
            <tr>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.user_type}</td>
              <td>{item.password}</td>
              <button onClick={() => deletById(item._id)}>delete</button>
              <button onClick={() => console.log("not dun")}>update</button>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  )
}