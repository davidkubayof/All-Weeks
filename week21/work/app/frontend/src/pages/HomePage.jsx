import { useEffect, useState } from "react"
import { getAll } from "../Api/apiLaunchers"
import { useNavigate } from "react-router"
import Nav from "../componnet/Nav"

export default function HomePage() {
    const [leunchers, setLeunchers] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getAllLaunchers()
    }, [])

    async function getAllLaunchers() {
        try {
            const { launchers } = await getAll()
            setLeunchers(launchers)
        } catch (error) {
            console.error(error)
        }
    }
    const filtered = leunchers
        .filter(item => item.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .filter(item => filter ? item.rocketType === filter : true)

    return (
        <>
            <div>HomePage</div>
            <Nav />
            <input type="text" placeholder="enter a city" value={search} onChange={(e) => setSearch(e.target.value)} />

            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">showing</option>
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>city</th>
                        <th>rocketType</th>
                        <th>latitude</th>
                        <th>longitude</th>
                    </tr>
                </thead>
                {filtered.map(item => (
                    <tbody key={item._id}>
                        <tr onClick={() => navigate(`/details/${item._id}`)} className="row">
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.rocketType}</td>
                            <td>{item.latitude}</td>
                            <td>{item.longitude}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}