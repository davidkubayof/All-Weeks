import { useParams } from 'react-router'
import { deletById, getById } from '../Api/apiLaunchers'
import { useEffect, useState } from 'react'
import Nav from '../componnet/Nav'

export default function LauncherDetailsPage() {
    const { id } = useParams()
    const [leuncher, setLeuncher] = useState([])

    useEffect(() => {
        getOne()
    }, [])
    async function getOne() {
        try {
            const { launcher } = await getById(id)
            setLeuncher(launcher)
        } catch (error) {
            console.error(error)
        }
    }    
    return (
        <>
            <div>LauncherDetailsPage</div>
            <Nav/>
            <div>id: {leuncher._id}</div>
            <div>name: {leuncher.name}</div>
            <div>city: {leuncher.city}</div>
            <div>rocketType: {leuncher.rocketType}</div>
            <div>latitude: {leuncher.latitude}</div>
            <div>longitude: {leuncher.longitude}</div>
            <button onClick={()=>deletById(id)}>delete</button>
        </>
    )
}