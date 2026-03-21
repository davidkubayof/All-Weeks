const url = 'http://localhost:3000/api/launchers'

export async function getAll() {
    const token = localStorage.getItem('token')
    const res = await fetch(url, {
        headers: { "authorization": `Bearer ${token}` }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function getById(id) {
    const token = localStorage.getItem('token')
    const res = await fetch(url + `/${id}`, {
        headers: { "authorization": `Bearer ${token}` }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}
export async function createLeunchers(leuncher) {
    const token = localStorage.getItem('token')
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(leuncher),
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
    const res = await fetch(url + `/${id}`, {
        method: 'DELETE',
        headers: { "authorization": `Bearer ${token}` }
    })
    if (!res.ok) {
        return "faild to fetch"
    }
    return await res.json()
}