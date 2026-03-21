import { useState } from "react"
import { createUser } from "../Api/apiUsers"
import Nav from "../componnet/Nav"

export default function LoginPage() {
    const [data, setData] = useState({
        username: "",
        email: "",
        user_type: "",
        password: ""
    })
    const [massege, setMassege] = useState('')

    async function handleSumbite() {
        event.preventDefault()
        const res = await createUser(data)
        console.log(res);
        
        if (res.message === "Creat user successful") {
            setMassege(res.message)
           
        } else {
        }
    }
    return (
        <>
            <div>RegisterPage</div>
            <Nav/>
            <form onSubmit={handleSumbite}>
                <input type="text" required placeholder="username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                <input type="email" required placeholder="email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                <select required onChange={(e) => { setData({ ...data, user_type: e.target.value }) }}>
                    <option value="">choes one</option>
                    <option value="admin">admin</option>
                    <option value="intelligence">intelligence</option>
                    <option value="airforce">airforce</option>
                </select>
                <input type="text" required placeholder="password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                <button type="submit">register</button>
            </form>
            <h4>{massege && massege}</h4>
        </>
    )
}
