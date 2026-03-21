import { Link, useNavigate } from "react-router";
import { getUser } from "../Api/apiUsers";
import { useState } from "react";

export default function Nav() {
    const [logOut, setLogOut] = useState('')
    const navigate = useNavigate()
    async function handleClick() {
        localStorage.removeItem('token')
        localStorage.removeItem('user_type')
        setLogOut('loging out')
        setTimeout(() => {
            navigate("/login")
        }, 1000)
    }
    async function handleClickAlret() {
        const user = await getUser()
        alert(`username: ${user.username} role: ${user.user_type}`)
    }

    return (
        <>
            <nav>
                <Link to="/">Home</Link>|{""}
                <Link to="/launcher">Add launcher</Link>|{""}
                <Link to="/users">Users</Link>|{""}
                <Link to="/register">Register</Link>|{""}
                <button onClick={handleClickAlret}>alret user clike</button>
                <button onClick={handleClick}>Log Out</button>
            </nav>
                <div>{logOut && logOut}</div>
        </>
    )
}

