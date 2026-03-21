import { useState } from "react"
import { loginUser } from "../Api/apiUsers"
import { useNavigate } from 'react-router'
export default function LoginPage() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const [massege, setMassege] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    async function handleSumbite() {
        event.preventDefault()
        setError('')
        const res = await loginUser(data)
        if (res.message === "Login successful") {
            localStorage.setItem('token', res.token)
            localStorage.setItem('user_type', res.user_type)
            setMassege(res.message)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } else if (res.message === "Invalid credentials") {
            setError(res.message)
        } else {
            navigate("/login")
        }
    }
    return (
        <>
            <div>LoginPage</div>
            <form onSubmit={handleSumbite}>
                <input type="text" required placeholder="username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                <input type="password" required placeholder="password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                <button type="submit">login</button>
            </form>
            {massege ? <div>{massege}</div> : <div>{error}</div>}
        </>
    )
}
