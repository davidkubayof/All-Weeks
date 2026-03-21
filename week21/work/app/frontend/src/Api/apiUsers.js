const url = 'http://localhost:3000/api/auth'

export async function loginUser({ username, password }) {
    const res = await fetch(url + "/login", {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
    })
    return await res.json()
}
export async function getUser() {
    const token = localStorage.getItem('token')
    const res = await fetch(url + "/user", {
        headers: {
            "authorization": `Bearer ${token}`,
        }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function getUsers() {
    const token = localStorage.getItem('token')
    const res = await fetch(url + "/users", {//
        headers: {
            "authorization": `Bearer ${token}`,
        }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function createUser(objUser) {
    const token = localStorage.getItem('token')
    const res = await fetch(url + "/register/create", {
        method: 'POST',
        body: JSON.stringify(objUser),
        headers: {
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function deletById(id) {
    const token = localStorage.getItem('token')
    const res = await fetch(url + `/register/delete/${id}`, {
        method: 'DELETE',
        headers: { "authorization": `Bearer ${token}` }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}